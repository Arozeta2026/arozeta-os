"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { title: "Executive Cockpit", href: "/" },
  { title: "Treasury", href: "/treasury" },
  { title: "Income", href: "/income" },
  { title: "Expenses", href: "/expenses" },
  { title: "Companies", href: "/companies" },
  { title: "Investments", href: "/investments" },
  { title: "Debt", href: "/debt" },
  { title: "Forecast", href: "/forecast" },
  { title: "AI Advisor", href: "/advisor" },
  { title: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-950 border-r border-slate-800 min-h-screen">

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-white">
          Arozeta OS
        </h1>

        <p className="text-slate-400 mt-2">
          Financial Operating System
        </p>

      </div>

      <nav className="p-4 space-y-2">

        {menu.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-xl px-4 py-3 transition ${
              pathname === item.href
                ? "bg-indigo-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {item.title}
          </Link>

        ))}

      </nav>

    </aside>
  );
}