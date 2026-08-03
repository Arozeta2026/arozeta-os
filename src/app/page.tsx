import MainLayout from "@/components/layout/MainLayout";
import KPIBar from "@/components/executive/KPIBar";

export default function MissionControl() {
  return (
    <MainLayout>

      <div className="space-y-8">

        <header className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-bold tracking-tight text-white">
              Mission Control
            </h1>

            <p className="mt-2 text-slate-400">
              Executive Financial Operating System
            </p>

          </div>

          <div className="flex items-center gap-3">

            <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300 hover:bg-slate-800">
              Consolidado
            </button>

            <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300 hover:bg-slate-800">
              Agosto 2026
            </button>

          </div>

        </header>

        <KPIBar />

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-semibold text-white">
                  Evolución de Tesorería
                </h2>

                <p className="text-slate-500">
                  Próximamente conectado a datos reales
                </p>

              </div>

              <div className="flex gap-2">

                <button className="rounded-lg bg-sky-600 px-3 py-1 text-sm text-white">
                  30D
                </button>

                <button className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-400">
                  90D
                </button>

                <button className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-400">
                  1A
                </button>

              </div>

            </div>

            <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-slate-700">

              <span className="text-slate-500">
                TreasuryChart (Sprint 1.4)
              </span>

            </div>

          </div>

          <div className="col-span-4 space-y-6">

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

              <h3 className="mb-5 text-lg font-semibold text-white">
                Próximos Pagos
              </h3>

              <p className="text-slate-500">
                Se conectará con debt.json
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

              <h3 className="mb-5 text-lg font-semibold text-white">
                Alertas
              </h3>

              <p className="text-slate-500">
                AI Advisor
              </p>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}