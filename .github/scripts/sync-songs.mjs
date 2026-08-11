import fs from "node:fs";
import { execSync } from "node:child_process";

const PLAYLIST_ID = "PLNrUkdaMdQFA";
const FILE = "src/data/songs.js";
const INSTANCES = [
  "https://inv.nadeko.net",
  "https://invidious.f5.si",
  "https://yewtu.be",
  "https://inv.vern.cc",
];

function curlJson(url) {
  const out = execSync(
    `curl -s -m 20 -A "Mozilla/5.0 (compatible; PlaylistSync/1.0)" "${url}"`,
    { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
  );
  return JSON.parse(out);
}

async function fetchPlaylist() {
  for (const base of INSTANCES) {
    try {
      const data = curlJson(`${base}/api/v1/playlists/${PLAYLIST_ID}`);
      if (Array.isArray(data.videos) && data.videos.length) {
        return { title: data.title, videos: data.videos };
      }
    } catch (e) {
      console.log(`[sync] ${base} failed: ${e.message}`);
    }
  }
  throw new Error("All Invidious instances failed");
}

const { title, videos } = await fetchPlaylist();
console.log(`[sync] playlist "${title}": ${videos.length} songs`);

const lines = videos.map(
  (v) => `  { id: "${v.videoId}", title: ${JSON.stringify(v.title)} },`
);

const out = `export const SONGS = [
${lines.join("\n")}
];
`;

fs.writeFileSync(FILE, out);
console.log(`[sync] wrote ${videos.length} songs to ${FILE}`);
