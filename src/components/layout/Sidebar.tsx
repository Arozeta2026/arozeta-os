"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { title: "Mission Control", href: "/", icon: "◈" },
  { title: "Treasury", href: "/treasury", icon: "◉" },
  { title: "Income", href: "/income", icon: "◎" },
  { title: "Expenses", href: "/expenses", icon: "◌" },
  { title: "Companies", href: "/companies", icon: "⬢" },
  { title: "Investments", href: "/investments", icon: "◍" },
  { title: "Debt", href: "/debt", icon: "◐" },
  { title: "Forecast", href: "/forecast", icon: "◒" },
  { title: "AI Advisor", href: "/advisor", icon: "✦" },
  { title: "Settings", href: "/settings", icon: "⚙" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-72 flex-col border-r border-slate-800 bg-[#0B1120]">
      <div className="border-b border-slate-800 px-8 py-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-lg font-bold text-white">
            A
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              AROZETA
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Financial OS
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-5 py-6">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Navigation
        </p>

        <div className="space-y-1">
          {menu.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                  active
                    ? "bg-sky-600 text-white shadow-lg shadow-sky-900/40"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <span className="w-5 text-center text-sm">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-slate-800 p-5">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-900/70 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 font-bold text-white">
            JG
          </div>

          <div>
            <p className="font-semibold text-white">
              Juan Guruceta
            </p>

            <p className="text-sm text-slate-500">
              CEO · Arozeta
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}