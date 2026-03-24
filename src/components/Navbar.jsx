import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, Code2, Terminal } from "lucide-react";
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
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Detect scroll to apply glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass shadow-lg shadow-black/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center glow-orange group-hover:glow-orange-strong transition-all duration-300">
                <Terminal size={18} className="text-white" />
              </div>
              {/* Subtle dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Hari<span className="gradient-text">om</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "nav-link px-4 py-2 rounded-md text-sm font-medium tracking-wide",
                    isActive && "active"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side — Theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center",
                "border border-border hover:border-orange-500",
                "text-muted-foreground hover:text-orange-500",
                "transition-all duration-200 hover:bg-orange-500/10"
              )}
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun size={16} />
                : <Moon size={16} />
              }
            </button>

            {/* CTA Button */}
            {/* <NavLink
              to="/contact"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-semibold font-display",
                "bg-orange-500 text-white hover:bg-orange-600",
                "transition-all duration-200 glow-orange hover:glow-orange-strong",
                "flex items-center gap-2"
              )}
            >
              <Code2 size={14} />
              Hire Me
            </NavLink> */}
          </div>

          {/* Mobile — right side */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-border text-muted-foreground hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-border text-muted-foreground hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-40 md:hidden",
          "glass shadow-xl transition-all duration-300 ease-in-out",
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="pt-20 pb-6 px-6 flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={{ animationDelay: `${i * 60}ms` }}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 rounded-lg text-sm font-medium tracking-wide",
                  "border border-transparent",
                  "transition-all duration-200",
                  "animate-slide-down",
                  isActive
                    ? "text-orange-500 bg-orange-500/10 border-orange-500/20"
                    : "text-foreground/70 hover:text-orange-500 hover:bg-orange-500/5"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          {/* <NavLink
            to="/contact"
            className="mt-3 px-4 py-3 rounded-lg text-sm font-semibold font-display bg-orange-500 text-white text-center hover:bg-orange-600 transition-all duration-200 glow-orange flex items-center justify-center gap-2"
          >
            <Code2 size={14} />
            Hire Me
          </NavLink> */}
        </div>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}