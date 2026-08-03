"use client";

export default function Topbar() {
  const today = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-[#0B1120] px-8">

      {/* Lado izquierdo */}
      <div>

        <h2 className="text-3xl font-bold tracking-tight text-white">
          Mission Control
        </h2>

        <p className="mt-1 text-sm capitalize text-slate-500">
          {today}
        </p>

      </div>

      {/* Centro */}
      <div className="hidden items-center gap-3 xl:flex">

        <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-800">
          Consolidado ▾
        </button>

        <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-800">
          Agosto 2026 ▾
        </button>

        <input
          placeholder="Buscar..."
          className="w-72 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-500"
        />

      </div>

      {/* Lado derecho */}
      <div className="flex items-center gap-4">

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:bg-slate-800">
          🔔
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:bg-slate-800">
          ⚙
        </button>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-3 py-2">

          <div className="text-right">

            <p className="text-xs text-slate-500">
              Bienvenido
            </p>

            <p className="font-medium text-white">
              Juan Guruceta
            </p>

          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 font-bold text-white">
            JG
          </div>

        </div>

      </div>

    </header>
  );
}