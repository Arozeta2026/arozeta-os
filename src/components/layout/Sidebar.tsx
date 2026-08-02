"use client";

import { useSidebar } from "@/hooks/useSidebar";

const items = [
  "Dashboard",
  "Treasury",
  "Debt",
  "Assets",
  "Invoicing",
  "Banks",
  "Objectives",
  "Settings",
];

export default function Sidebar() {
  const { collapsed } = useSidebar();

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300 border-r border-slate-800 bg-slate-950 text-white`}
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          Arozeta<span className="text-cyan-400">OS</span>
        </h1>

        {!collapsed && (
          <p className="mt-2 text-sm text-slate-400">
            Financial Operating System
          </p>
        )}
      </div>

      <nav className="px-4 space-y-2">
        {items.map((item) => (
          <button
            key={item}
            className="w-full rounded-xl px-4 py-3 text-left hover:bg-slate-800 transition"
          >
            {collapsed ? item.charAt(0) : item}
          </button>
        ))}
      </nav>
    </aside>
  );
}