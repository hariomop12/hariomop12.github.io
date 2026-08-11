import { useEffect, useRef, useState } from "react";
import { Music, ChevronUp, ChevronDown, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { SONGS } from "../data/songs";

const YT_API_URL = "https://www.youtube.com/iframe_api";
const STORAGE_KEY = "portfolio-song-index";

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    return saved >= 0 && saved < SONGS.length ? saved : 0;
  });
  const [progress, setProgress] = useState({ current: 0, duration: 0 });

  const playerRef = useRef(null);
  const indexRef = useRef(index);
  const playingRef = useRef(false);

  indexRef.current = index;
  playingRef.current = playing;

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.YT || !window.YT.Player) return;
      playerRef.current = new window.YT.Player("yt-music-player", {
        videoId: SONGS[indexRef.current].id,
        events: {
          onReady: () => setReady(true),
          onStateChange: (e) => {
            const isPlaying = e.data === window.YT.PlayerState.PLAYING;
            setPlaying(isPlaying);
            if (e.data === window.YT.PlayerState.ENDED) skip(1);
          },
          onError: () => skip(1),
        },
      });
    };

    if (window.YT && window.YT.Player) {
      init();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        init();
      };
      if (!document.getElementById("yt-music-api")) {
        const tag = document.createElement("script");
        tag.id = "yt-music-api";
        tag.src = YT_API_URL;
        document.head.appendChild(tag);
      }
    }

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const p = playerRef.current;
      if (!p || !p.getCurrentTime || !playingRef.current) return;
      setProgress({
        current: p.getCurrentTime(),
        duration: p.getDuration(),
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const toggle = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playingRef.current) p.pauseVideo();
    else p.playVideo();
  };

  const skip = (dir) => {
    const p = playerRef.current;
    if (!p) return;
    let nextIndex = indexRef.current + dir;
    if (nextIndex >= SONGS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = SONGS.length - 1;
    setIndex(nextIndex);
    localStorage.setItem(STORAGE_KEY, String(nextIndex));
    p.loadVideoById(SONGS[nextIndex].id);
    setProgress({ current: 0, duration: 0 });
  };

  const seek = (e) => {
    const p = playerRef.current;
    if (!p || !p.getDuration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const frac = (e.clientX - rect.left) / rect.width;
    p.seekTo(frac * p.getDuration(), true);
  };

  const fmt = (sec) => {
    if (!isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const song = SONGS[index];
  const pct = progress.duration ? (progress.current / progress.duration) * 100 : 0;

  return (
    <div className="fixed bottom-4 left-4 z-40 w-72 rounded-lg border border-border bg-card/95 shadow-lg overflow-hidden">
      <div id="yt-music-player" className="pointer-events-none absolute w-0 h-0 opacity-0" />

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium"
      >
        <span className="flex items-center gap-2">
          <Music size={14} className="text-primary" />
          Music
          <span className="text-xs text-foreground/40">{index + 1}/{SONGS.length}</span>
        </span>
        {open ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>

      {open && (
        <div className="border-t border-border px-4 py-3 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium truncate" title={song.title}>
              {song.title}
            </p>
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${playing ? "bg-primary animate-pulse" : "bg-foreground/20"}`}
            />
          </div>

          <div
            className="h-1.5 rounded-full bg-foreground/10 cursor-pointer group"
            onClick={seek}
          >
            <div
              className="h-full rounded-full bg-primary group-hover:bg-orange-600 transition-colors"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-foreground/40">
            <span>{fmt(progress.current)}</span>
            <span>{fmt(progress.duration)}</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => skip(-1)}
              disabled={!ready}
              aria-label="Previous"
              className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary disabled:opacity-30 transition-colors"
            >
              <SkipBack size={18} />
            </button>

            <button
              onClick={toggle}
              disabled={!ready}
              aria-label={playing ? "Pause" : "Play"}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-orange-600 disabled:opacity-30 transition-colors"
            >
              {playing ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
            </button>

            <button
              onClick={() => skip(1)}
              disabled={!ready}
              aria-label="Next"
              className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary disabled:opacity-30 transition-colors"
            >
              <SkipForward size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
