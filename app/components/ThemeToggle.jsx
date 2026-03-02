"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 1. Initialize theme as a default to avoid server/client mismatch
  const [theme, setTheme] = useState("dark");
  
  // 2. IMPORTANT: Start with false so server and client match initially
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 3. Once component mounts on client, set mounted to true
    setMounted(true);
    
    // 4. Safely check localStorage only on the client
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    
    // Apply class to html tag
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // 5. Render placeholder if not mounted
  if (!mounted) return <div className="h-10 w-20" />;

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full bg-zinc-800 border border-zinc-700 p-1 transition-colors hover:bg-zinc-700 light:bg-zinc-200"
      aria-label="Toggle theme"
    >
      <motion.div
        className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-xl"
        initial={false}
        animate={{
          x: theme === "dark" ? 0 : 40,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {theme === "dark" ? (
          <Moon size={16} className="text-zinc-900" />
        ) : (
          <Sun size={16} className="text-amber-500" />
        )}
      </motion.div>

      {/* Static Icons in Background */}
      <div className="absolute inset-0 flex items-center justify-between px-3 opacity-20">
        <Moon size={14} className="text-white" />
        <Sun size={14} className="text-white" />
      </div>
    </button>
  );
}