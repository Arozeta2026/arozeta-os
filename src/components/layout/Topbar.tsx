"use client";

export default function Topbar() {
  const today = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-20 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-8">

      <div>

        <h2 className="text-2xl font-bold text-white">
          Executive Cockpit
        </h2>

        <p className="text-slate-400 text-sm capitalize">
          {today}
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="text-sm text-slate-400">
            Bienvenido
          </p>

          <p className="font-semibold text-white">
            Juan Guruceta
          </p>
        </div>

        <div className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
          JG
        </div>

      </div>

    </header>
  );
}