"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  ArrowUpDown,
  Download,
  Plus,
} from "lucide-react";

export default function ExpenseToolbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar gasto..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none transition focus:border-sky-500"
          />

        </div>

        {/* Actions */}

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-slate-300 transition hover:bg-slate-800">
            <Filter size={16} />
            Estado
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-slate-300 transition hover:bg-slate-800">
            <ArrowUpDown size={16} />
            Ordenar
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-slate-300 transition hover:bg-slate-800">
            <Download size={16} />
            Exportar
          </button>

          <Link
            href="/expenses/new"
            className="flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500"
          >
            <Plus size={18} />
            Nuevo gasto
          </Link>

        </div>

      </div>

    </div>
  );
}