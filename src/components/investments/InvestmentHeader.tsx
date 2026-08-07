import { TrendingUp } from "lucide-react";

export default function InvestmentHeader() {
  return (
    <section className="flex items-end justify-between">

      <div>

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-emerald-500/15 p-3">
            <TrendingUp
              size={28}
              className="text-emerald-400"
            />
          </div>

          <div>

            <h1 className="text-4xl font-bold tracking-tight text-white">
              Portfolio
            </h1>

            <p className="mt-1 text-slate-400">
              Gestiona todas tus inversiones en acciones.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}