import { useEffect, useState } from "react";
import { Globe, ChevronUp, ChevronDown } from "lucide-react";

function detectBrowser() {
  const ua = navigator.userAgent;
  let browser = "Unknown";
  let os = "Unknown";

  if (/Edg\//.test(ua)) browser = "Edge";
  else if (/OPR\//.test(ua)) browser = "Opera";
  else if (/Chrome\//.test(ua)) browser = "Chrome";
  else if (/Firefox\//.test(ua)) browser = "Firefox";
  else if (/Safari\//.test(ua)) browser = "Safari";
  else if (/Trident|MSIE/.test(ua)) browser = "Internet Explorer";

  if (/Windows NT 10/.test(ua)) os = "Windows 10/11";
  else if (/Windows/.test(ua)) os = "Windows";
  else if (/Mac OS X/.test(ua)) os = "macOS";
  else if (/Android/.test(ua)) os = "Android";
  else if (/iPhone|iPad|iPod/.test(ua)) os = "iOS";
  else if (/Linux/.test(ua)) os = "Linux";

  return { browser, os };
}

export default function VisitorPanel() {
  const [open, setOpen] = useState(false);
  const [ua, setUa] = useState({ browser: "Unknown", os: "Unknown" });
  const [info, setInfo] = useState({
    ip: null,
    location: null,
    isp: null,
    timezone: null,
  });

  useEffect(() => {
    setUa(detectBrowser());
    let cancelled = false;

    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((d) => {
        if (cancelled || !d || !d.ip) return;
        setInfo({
          ip: d.ip,
          location: [d.city, d.region, d.country].filter(Boolean).join(", "),
          isp: d.connection?.org || null,
          timezone: d.timezone?.id || null,
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const localTime = info.timezone
    ? new Date().toLocaleTimeString([], {
        timeZone: info.timezone,
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  const rows = [
    { label: "IP", value: info.ip },
    { label: "Location", value: info.location },
    { label: "ISP", value: info.isp },
    { label: "Browser", value: ua.browser },
    { label: "OS", value: ua.os },
    { label: "Time", value: localTime },
    {
      label: "Screen",
      value: `${window.screen.width}x${window.screen.height}`,
    },
  ].filter((r) => r.value);

  return (
    <div className="fixed bottom-4 right-4 z-40 w-64 rounded-lg border border-border bg-card/95 shadow-lg">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium"
      >
        <span className="flex items-center gap-2">
          <Globe size={14} className="text-primary" />
          Visitor Details
        </span>
        {open ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </button>

      {open && (
        <div className="border-t border-border px-4 py-3 space-y-1.5">
          {rows.map((r) => (
            <div key={r.label} className="flex justify-between gap-3 text-xs">
              <span className="text-foreground/40">{r.label}</span>
              <span className="text-right text-foreground/80 break-all">
                {r.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
