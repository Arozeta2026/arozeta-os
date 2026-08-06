"use client";

import { Menu, Bell, Search } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";

export default function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      <div className="flex items-center gap-4">

        <button
          onClick={toggle}
          className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <Menu size={22} />
        </button>

        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Buscar..."
            className="w-80 rounded-xl border border-slate-700 bg-slate-900 py-2 pl-11 pr-4 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
          />

        </div>

      </div>

      <div className="flex items-center gap-4">

        <button className="relative rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 font-semibold text-white">
            JG
          </div>

          <div className="hidden md:block">

            <p className="text-sm font-semibold text-white">
              Juan Guruceta
            </p>

            <p className="text-xs text-slate-500">
              CEO · Arozeta
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}