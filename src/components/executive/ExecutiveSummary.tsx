import ExecutiveCard from "@/components/ui/ExecutiveCard";
import { getDashboard } from "@/services/dashboardService";

export default function ExecutiveSummary() {
  const dashboard = getDashboard();

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <ExecutiveCard
      title="Executive Summary"
      subtitle="Resumen financiero mensual"
    >
      <div className="space-y-8">

        <div className="text-center">

          <p className="text-sm uppercase tracking-wider text-slate-400">
            Cash Flow
          </p>

          <h2
            className={`mt-2 text-5xl font-bold ${
              dashboard.cashFlow >= 0
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {money(dashboard.cashFlow)}
          </h2>

          <p className="mt-2 text-slate-400">
            Ahorro mensual del{" "}
            <strong>
              {dashboard.savingsRate.toFixed(1)}%
            </strong>
          </p>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-sm text-slate-400">
              Income
            </p>

            <p className="mt-2 text-2xl font-bold text-emerald-400">
              {money(dashboard.income)}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-sm text-slate-400">
              Expenses
            </p>

            <p className="mt-2 text-2xl font-bold text-red-400">
              {money(dashboard.expenses)}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-sm text-slate-400">
              Savings
            </p>

            <p className="mt-2 text-2xl font-bold text-sky-400">
              {dashboard.savingsRate.toFixed(1)}%
            </p>

          </div>

        </div>

      </div>
    </ExecutiveCard>
  );
}