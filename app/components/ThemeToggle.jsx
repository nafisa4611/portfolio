"use client";

import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 glass px-4 py-2 rounded-xl"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
