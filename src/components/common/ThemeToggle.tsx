"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="text-base leading-none select-none">{isDark ? "○" : "●"}</span>
    </button>
  );
}
