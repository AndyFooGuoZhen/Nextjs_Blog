"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="p-2 w-10 h-10" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-xl bg-[#e0e5ec] dark:bg-[#1b1b1b] shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#121212,-4px_-4px_8px_#242424] active:shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff] dark:active:shadow-[inset_2px_2px_5px_#121212,inset_-2px_-2px_5px_#242424] text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-all duration-300 flex items-center justify-center"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <BsSunFill className="w-5 h-5 text-orange-500" />
      ) : (
        <BsMoonFill className="w-5 h-5 text-gray-600 hover:text-orange-500" />
      )}
    </button>
  );
}
