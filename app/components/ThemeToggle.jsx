

"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // 1. Check local storage
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    // 2. FIX: Toggle the "dark" class on the html element
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    // 3. FIX: Toggle the "dark" class on the html element
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full bg-white/5 border border-white/10 p-1 transition-colors hover:bg-white/10"
      aria-label="Toggle theme"
    >
      <motion.div
        className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg"
        animate={{
          x: theme === "dark" ? 0 : 40,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? (
          <Moon size={16} className="text-black" />
        ) : (
          <Sun size={16} className="text-black" />
        )}
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-between px-3 text-white/20">
        <Sun size={14} />
        <Moon size={14} />
      </div>
    </button>
  );
}