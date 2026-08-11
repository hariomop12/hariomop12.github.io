import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Blog",     to: "/blog" },
  { label: "Contact",  to: "/contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="font-bold text-lg tracking-tight">
            Hari<span className="text-primary">om</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors",
                    isActive && "text-primary"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-md flex items-center justify-center text-foreground/60 hover:text-foreground border border-border hover:border-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-md flex items-center justify-center text-foreground/60 hover:text-foreground border border-border transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="w-9 h-9 rounded-md flex items-center justify-center text-foreground/60 hover:text-foreground border border-border transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="relative bg-background border-b border-border px-6 pt-20 pb-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-md text-sm text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors",
                    isActive && "text-primary"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
