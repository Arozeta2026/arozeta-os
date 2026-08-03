import Link from "next/link";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

import {
  getExpenses,
  getTopExpenses,
  getTotalExpenses,
} from "@/services/expenseService";

export default function ExpensesWidget() {
  const items = getExpenses();

  const total = getTotalExpenses();

  const topExpenses = getTopExpenses();

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <ExecutiveCard
      title="Expenses"
      subtitle={`${items.length} gastos registrados`}
    >
      <div className="space-y-6">

        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5">

          <p className="text-sm text-slate-400">
            Total mensual
          </p>

          <p className="mt-2 text-4xl font-bold text-red-400">
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
          className="block rounded-xl bg-red-600 py-3 text-center font-semibold text-white transition hover:bg-red-500"
        >
          Ver todos los gastos →
        </Link>

      </div>
    </ExecutiveCard>
  );
}