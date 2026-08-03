import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function TreasuryChart() {
  return (
    <ExecutiveCard
      title="Treasury"
      subtitle="Evolución de tesorería"
    >
      <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-slate-700">

        <p className="text-slate-500">
          Treasury Chart (Sprint 2)
        </p>

      </div>
    </ExecutiveCard>
  );
}