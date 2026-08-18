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
    root.style.setProperty(`--${key}`, value);
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
    localStorage.setItem("portfolio-mode", mode);

    applyThemeVars(themeData, mode);

    return () => {
      removeThemeVars(themeData, mode);
    };
  }, [mode, themeData]);

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
