"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Menu, Info, Settings, Shield } from "lucide-react";

type LayoutProps = {
  children: ReactNode;
};

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: <Shield size={18} /> },
  { href: "/audit", label: "Audit", icon: <Menu size={18} /> },
  { href: "/settings", label: "Settings", icon: <Settings size={18} /> },
  { href: "/about", label: "About", icon: <Info size={18} /> },
];

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-6 hidden md:block shadow-xl">
        <h1 className="text-3xl font-extrabold mb-10 tracking-tight">BiasRX</h1>
        <nav className="space-y-4">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === href
                  ? "bg-white text-black"
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
