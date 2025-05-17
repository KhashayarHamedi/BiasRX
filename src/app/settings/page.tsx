"use client";

import Layout from "@/components/ui/layout";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("system");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("biasrx-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTheme(parsed.theme);
      setLanguage(parsed.language);
      setNotifications(parsed.notifications);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "biasrx-settings",
      JSON.stringify({ theme, language, notifications })
    );
  }, [theme, language, notifications]);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold mb-6">⚙️ Settings</h1>

        {/* Theme Setting */}
        <div>
          <label className="block text-sm font-medium mb-2">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        {/* Language Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="ru">Русский</option>
            <option value="ar">العربية</option>
            <option value="hi">हिन्दी</option>
            <option value="pt">Português</option>
          </select>
        </div>

        {/* Notification Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Enable Alerts</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="h-5 w-5"
          />
        </div>

        {/* Export Button */}
        <div>
          <button
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            onClick={() => alert("Exporting data to CSV...")}
          >
            Export Data as CSV
          </button>
        </div>
      </div>
    </Layout>
  );
}
