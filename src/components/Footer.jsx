import { useEffect, useState } from "react";
import { Code2, Globe, Terminal } from "lucide-react";
import { counterGet } from "../lib/counter";

const VISITS_KEY = "site-visits-counted";

const SOCIALS = [
  { icon: Code2,    label: "GitHub",   href: "https://github.com/hariomop12" },
  { icon: Globe,    label: "LinkedIn", href: "https://www.linkedin.com/in/hariom-op/" },
  { icon: Terminal, label: "LeetCode", href: "https://leetcode.com/hariomtanu" },
];

export default function Footer() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        if (!sessionStorage.getItem(VISITS_KEY)) {
          const data = await counterGet("/up");
          const value = data?.data?.up_count;
          if (typeof value === "number") {
            sessionStorage.setItem(VISITS_KEY, "1");
            if (!cancelled) setVisits(value);
          }
        } else {
          const data = await counterGet("");
          const value = data?.data?.up_count;
          if (typeof value === "number" && !cancelled) setVisits(value);
        }
      } catch {
        if (!cancelled) setVisits(null);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              aria-label={s.label}
              className="w-9 h-9 rounded-md flex items-center justify-center text-foreground/50 hover:text-primary border border-border hover:border-primary transition-colors"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
        <div className="space-y-3">
          {visits !== null && (
            <p className="text-xs text-foreground/40">{visits} total visits</p>
          )}
          <p className="text-sm text-foreground/60">
            Made with love by <span className="text-primary">Hariom</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
