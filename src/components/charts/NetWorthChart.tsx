import companies from "@/data/companies.json";
import investments from "@/data/investments.json";
import debt from "@/data/debt.json";

import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function NetWorthChart() {
  const companyList = companies as any[];
  const investmentList = investments as any[];
  const debtList = debt as any[];

  const companyCount = companyList.length;

  // Ignoramos el registro resumen (ID vacío)
  const investmentsTotal = investmentList
    .filter((i) => i.ID !== "")
    .reduce(
      (sum, item) => sum + Number(item.Valor || 0),
      0
    );

  const debtTotal = debtList.reduce(
    (sum, item) => sum + Number(item.Capital || 0),
    0
  );

  const financialNetWorth = investmentsTotal - debtTotal;

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
            {companyCount}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Inversiones
          </span>

          <span className="font-semibold text-emerald-400">
            {money(investmentsTotal)}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Deuda
          </span>

          <span className="font-semibold text-red-400">
            {money(debtTotal)}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Caja
          </span>

          <span className="text-slate-500">
            Pendiente
          </span>

        </div>

        <div className="border-t border-slate-700 pt-5">

          <div className="flex items-center justify-between">

            <span className="text-lg font-medium text-white">
              Patrimonio financiero
            </span>

            <span
              className={`text-2xl font-bold ${
                financialNetWorth >= 0
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {money(financialNetWorth)}
            </span>

          </div>

        </div>

        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">

          <p className="text-sm text-amber-300">
            Faltan las valoraciones de las empresas y los saldos bancarios para calcular el patrimonio total.
          </p>

        </div>

      </div>
    </ExecutiveCard>
  );
}