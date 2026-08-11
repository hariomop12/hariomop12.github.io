/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(232, 228, 218, 0.14)",
        input: "rgba(232, 228, 218, 0.14)",
        ring: "rgba(232, 228, 218, 0.4)",
        background: "#3b372e",
        foreground: "#e8e4da",
        primary: {
          DEFAULT: "#e8e4da",
          foreground: "#2d2a24",
        },
        secondary: {
          DEFAULT: "#444037",
          foreground: "#e8e4da",
        },
        destructive: {
          DEFAULT: "#d66a5a",
          foreground: "#fff",
        },
        muted: {
          DEFAULT: "#413d34",
          foreground: "rgba(232, 228, 218, 0.55)",
        },
        accent: {
          DEFAULT: "#444037",
          foreground: "#e8e4da",
        },
        card: {
          DEFAULT: "#413d34",
          foreground: "#e8e4da",
        },
        orange: {
          50:  "#f7f5ef",
          100: "#efede5",
          200: "#e4e1d7",
          300: "#d6d2c6",
          400: "#c5c0b2",
          500: "#b3ad9d",
          600: "#999381",
          700: "#7a7465",
          800: "#5c574c",
          900: "#453f34",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
