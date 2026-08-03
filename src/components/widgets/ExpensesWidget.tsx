import Link from "next/link";
import expenses from "@/data/expenses.json";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function ExpensesWidget() {
  const items = expenses as any[];

  const total = items.reduce(
    (sum, e) => sum + Number(e.Importe || 0),
    0
  );

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  const topExpenses = [...items]
    .sort(
      (a, b) =>
        Number(b.Importe || 0) -
        Number(a.Importe || 0)
    )
    .slice(0, 5);

  return (
    <ExecutiveCard
      title="Expenses"
      subtitle={`${items.length} gastos registrados`}
    >
      <div className="space-y-6">

        <div className="rounded-2xl bg-slate-800 p-5">

          <p className="text-sm text-slate-400">
            Total mensual
          </p>

          <p className="mt-2 text-4xl font-bold text-white">
            {money(total)}
          </p>

        </div>

        <div className="space-y-3">

          {topExpenses.map((expense, index) => (

            <div
              key={index}
              className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3"
            >

              <div>

                <p className="font-medium text-white">
                  {expense.Concepto}
                </p>

                <p className="text-sm text-slate-500">
                  {expense.Empresa}
                </p>

              </div>

              <span className="font-semibold text-red-400">
                {money(Number(expense.Importe))}
              </span>

            </div>

          ))}

        </div>

        <Link
          href="/expenses"
          className="block rounded-xl bg-sky-600 py-3 text-center font-semibold text-white transition hover:bg-sky-500"
        >
          Ver todos los gastos →
        </Link>

      </div>
    </ExecutiveCard>
  );
}