import { useEffect, useState } from "react";
import { counterGet } from "../lib/counter";

const VISITS_KEY = "site-visits-counted";

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
      <div className="max-w-5xl mx-auto px-6 py-8 text-center space-y-3">
        {visits !== null && (
          <p className="text-xs text-foreground/40">{visits} total visits</p>
        )}
        <p className="text-sm text-foreground/60">
          Made with love by <span className="text-primary">Hariom</span>
        </p>
      </div>
    </footer>
  );
}
