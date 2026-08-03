import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function NetWorthChart() {
  return (
    <ExecutiveCard
      title="Net Worth"
      subtitle="Distribución patrimonial"
    >
      <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-slate-700">

        <p className="text-slate-500">
          Net Worth Allocation
        </p>

      </div>
    </ExecutiveCard>
  );
}