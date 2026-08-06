import Link from "next/link";

import MetricCard from "@/components/ui/MetricCard";

interface Props {
  totalMonthly: number;
  totalAnnual: number;
  activeExpenses: number;
  recurringExpenses: number;
}

export default function ExpenseHeader({
  totalMonthly,
  totalAnnual,
  activeExpenses,
  recurringExpenses,
}: Props) {
  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex items-end justify-between">

        <div>

          <h1 className="text-5xl font-bold tracking-tight text-white">
            Expenses
          </h1>

          <p className="mt-2 text-slate-400">
            Manage recurring and one-off financial commitments.
          </p>

        </div>

        <Link
          href="/expenses/new"
          className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500"
        >
          + Nuevo gasto
        </Link>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <MetricCard
          title="Monthly Spend"
          value={money(totalMonthly)}
          subtitle="Compromisos mensuales"
          color="blue"
        />

        <MetricCard
          title="Annual Commitments"
          value={money(totalAnnual)}
          subtitle="Coste anual estimado"
          color="green"
        />

        <MetricCard
          title="Active Expenses"
          value={activeExpenses.toString()}
          subtitle="Gastos activos"
          color="amber"
        />

        <MetricCard
          title="Recurring"
          value={recurringExpenses.toString()}
          subtitle="Pagos recurrentes"
          color="red"
        />

      </div>

    </section>
  );
}