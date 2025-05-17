"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Globe } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 shadow-sm">
      {/* Language selector */}
      <div className="flex items-center gap-3">
        <Globe size={18} className="text-muted-foreground" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent text-sm text-muted-foreground focus:outline-none"
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
          <option value="fa">فارسی</option>
        </select>
      </div>

      {/* Theme toggle + Avatar */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full" />
      </div>
    </header>
  );
}
