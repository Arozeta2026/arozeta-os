import income from "@/data/income.json";
import expenses from "@/data/expenses.json";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function IncomeExpenseChart() {

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

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  const max = Math.max(totalIncome, totalExpenses);

  const incomeWidth = (totalIncome / max) * 100;
  const expenseWidth = (totalExpenses / max) * 100;

  return (
    <ExecutiveCard
      title="Income vs Expenses"
      subtitle="Resumen financiero mensual"
    >

      <div className="space-y-8">

        <div>

          <div className="flex justify-between mb-2">

            <span className="text-slate-400">
              Ingresos
            </span>

            <strong className="text-emerald-400">
              {money(totalIncome)}
            </strong>

          </div>

          <div className="h-4 rounded-full bg-slate-800 overflow-hidden">

            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-700"
              style={{ width: `${incomeWidth}%` }}
            />

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <span className="text-slate-400">
              Gastos
            </span>

            <strong className="text-red-400">
              {money(totalExpenses)}
            </strong>

          </div>

          <div className="h-4 rounded-full bg-slate-800 overflow-hidden">

            <div
              className="h-full bg-red-500 rounded-full transition-all duration-700"
              style={{ width: `${expenseWidth}%` }}
            />

          </div>

        </div>

        <div className="border-t border-slate-700 pt-6 flex justify-between">

          <span className="text-xl text-slate-300">
            Cash Flow
          </span>

          <span
            className={`text-3xl font-bold ${
              cashFlow >= 0
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {money(cashFlow)}
          </span>

        </div>

      </div>

    </ExecutiveCard>
  );
}