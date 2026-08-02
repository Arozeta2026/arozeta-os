"use client";

import { useSidebar } from "@/hooks/useSidebar";

export default function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">
      <div>
        <button
          onClick={toggle}
          className="mb-2 rounded bg-slate-800 px-3 py-1 text-sm"
        >
          ☰
        </button>

        <h2 className="text-xl font-semibold text-white">
          Executive Dashboard
        </h2>

        <p className="text-sm text-slate-400">
          Arozeta Enterprises
        </p>
      </div>

      <div className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-900">
        Agosto 2026
      </div>
    </header>
  );
}