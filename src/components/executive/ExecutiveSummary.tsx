import income from "@/data/income.json";
import expenses from "@/data/expenses.json";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function ExecutiveSummary() {
  const incomes = income as any[];
  const expenseList = expenses as any[];

  const totalIncome = incomes.reduce(
    (sum, item) => sum + Number(item.Importe || 0),
    0
  );

  const totalExpenses = expenseList.reduce(
    (sum, item) => sum + Number(item.Importe || 0),
    0
  );

  const cashFlow = totalIncome - totalExpenses;

  const savingsRate =
    totalIncome > 0
      ? (cashFlow / totalIncome) * 100
      : 0;

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
              cashFlow >= 0
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {money(cashFlow)}
          </h2>

          <p className="mt-2 text-slate-400">
            Ahorro mensual del{" "}
            <strong>
              {savingsRate.toFixed(1)}%
            </strong>
          </p>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-sm text-slate-400">
              Income
            </p>

            <p className="mt-2 text-2xl font-bold text-emerald-400">
              {money(totalIncome)}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-sm text-slate-400">
              Expenses
            </p>

            <p className="mt-2 text-2xl font-bold text-red-400">
              {money(totalExpenses)}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 p-5">

            <p className="text-sm text-slate-400">
              Savings
            </p>

            <p className="mt-2 text-2xl font-bold text-sky-400">
              {savingsRate.toFixed(1)}%
            </p>

          </div>

        </div>

      </div>
    </ExecutiveCard>
  );
}