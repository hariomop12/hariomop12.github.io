import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getThemeById } from "../../lib/themes";

const ThemeContext = createContext({
  theme: "dark",
  mode: "dark",
  toggleTheme: () => {},
  setThemeId: () => {},
});

function applyThemeVars(themeData, mode) {
  const root = document.documentElement;
  const colors = themeData[mode];
  if (!colors) return;

  Object.entries(colors).forEach(([key, value]) => {
    if (key === "radius") {
      root.style.setProperty(`--radius`, value);
    } else if (key === "font-sans") {
      root.style.setProperty(`--font-sans`, value);
    } else if (key === "font-mono") {
      root.style.setProperty(`--font-mono`, value);
    } else if (key.startsWith("chart-")) {
      root.style.setProperty(`--${key}`, value);
    } else if (key.startsWith("sidebar-")) {
      root.style.setProperty(`--${key}`, value);
    } else {
      root.style.setProperty(`--${key}`, value);
    }
  });
}

function removeThemeVars(themeData, mode) {
  const root = document.documentElement;
  const colors = themeData[mode];
  if (!colors) return;

  Object.keys(colors).forEach((key) => {
    root.style.removeProperty(`--${key}`);
  });
}

export function ThemeProvider({ children, defaultTheme = "dark" }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem("portfolio-mode") || defaultTheme
  );

  const [themeId, setThemeIdState] = useState(
    () => localStorage.getItem("portfolio-theme-id") || "notion"
  );

  const themeData = getThemeById(themeId);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(mode);
    root.setAttribute("data-theme", themeId);
    localStorage.setItem("portfolio-mode", mode);
    localStorage.setItem("portfolio-theme-id", themeId);

    applyThemeVars(themeData, mode);

    return () => {
      removeThemeVars(themeData, mode);
    };
  }, [mode, themeData, themeId]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setThemeId = useCallback((id) => {
    setThemeIdState(id);
    localStorage.setItem("portfolio-theme-id", id);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: mode, mode, toggleTheme, themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
