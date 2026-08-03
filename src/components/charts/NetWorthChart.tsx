import ExecutiveCard from "@/components/ui/ExecutiveCard";
import { getDashboard } from "@/services/dashboardService";

export default function NetWorthChart() {
  const dashboard = getDashboard();

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <ExecutiveCard
      title="Net Worth"
      subtitle="Situación patrimonial"
    >
      <div className="space-y-5">

        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Empresas
          </span>

          <span className="font-semibold text-white">
            {dashboard.companies}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Inversiones
          </span>

          <span className="font-semibold text-emerald-400">
            {money(dashboard.investments)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Deuda
          </span>

          <span className="font-semibold text-red-400">
            {money(dashboard.debt)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Tesorería
          </span>

          <span className="font-semibold text-sky-400">
            {money(dashboard.treasury)}
          </span>
        </div>

        <div className="border-t border-slate-700 pt-5">

          <div className="flex items-center justify-between">

            <span className="text-lg font-medium text-white">
              Patrimonio financiero
            </span>

            <span
              className={`text-2xl font-bold ${
                dashboard.financialNetWorth >= 0
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {money(dashboard.financialNetWorth)}
            </span>

          </div>

        </div>

        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">

          <p className="text-sm text-amber-300">
            El patrimonio total aumentará cuando se incorporen las valoraciones
            de las empresas y los saldos bancarios.
          </p>

        </div>

      </div>
    </ExecutiveCard>
  );
}