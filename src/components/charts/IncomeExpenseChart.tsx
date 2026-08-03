import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function IncomeExpenseChart() {
  return (
    <ExecutiveCard
      title="Income vs Expenses"
      subtitle="Comparativa mensual"
    >
      <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-slate-700">

        <p className="text-slate-500">
          Income / Expenses Chart
        </p>

      </div>
    </ExecutiveCard>
  );
}