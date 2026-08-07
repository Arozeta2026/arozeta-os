import Link from "next/link";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

import {
  getAllIncome,
  getTopIncome,
  getTotalIncome,
} from "@/services/incomeService";

export default async function IncomeWidget() {
  const items = await getAllIncome();

  const total = await getTotalIncome();

  const topIncome = await getTopIncome();

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <ExecutiveCard
      title="Income"
      subtitle={`${items.length} ingresos registrados`}
    >
      <div className="space-y-6">

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">

          <p className="text-sm text-slate-400">
            Total anual
          </p>

          <p className="mt-2 text-4xl font-bold text-emerald-400">
            {money(total)}
          </p>

        </div>

        <div className="space-y-3">

          {topIncome.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3"
            >
              <div>

                <p className="font-medium text-white">
                  {item.concept}
                </p>

                <p className="text-sm text-slate-500">
                  {item.company?.name ?? "-"}
                </p>

              </div>

              <span className="font-semibold text-emerald-400">
                {money(item.amount)}
              </span>

            </div>
          ))}

        </div>

        <Link
          href="/income"
          className="block rounded-xl bg-emerald-600 py-3 text-center font-semibold text-white transition hover:bg-emerald-500"
        >
          Ver todos los ingresos →
        </Link>

      </div>
    </ExecutiveCard>
  );
}