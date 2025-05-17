"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 shadow-sm flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        🧠 BiasRX
      </Link>

      <div className="flex items-center gap-4">
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <Link
            href="/dashboard"
            className={`hover:text-primary transition ${
              pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/audit"
            className={`hover:text-primary transition ${
              pathname === "/audit" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Audit
          </Link>
          <Link
            href="/settings"
            className={`hover:text-primary transition ${
              pathname === "/settings" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Settings
          </Link>
          <Link
            href="/about"
            className={`hover:text-primary transition ${
              pathname === "/about" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
