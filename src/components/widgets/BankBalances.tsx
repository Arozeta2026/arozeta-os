import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function BankBalances() {
  return (
    <ExecutiveCard
      title="Caja por banco"
      subtitle="Liquidez disponible"
    >
      <div className="space-y-4">

        <div className="rounded-xl bg-slate-800 p-4">
          <div className="flex justify-between">

            <span className="text-slate-300">
              Santander
            </span>

            <span className="font-semibold text-white">
              --
            </span>

          </div>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <div className="flex justify-between">

            <span className="text-slate-300">
              BBVA
            </span>

            <span className="font-semibold text-white">
              --
            </span>

          </div>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <div className="flex justify-between">

            <span className="text-slate-300">
              Inversis
            </span>

            <span className="font-semibold text-white">
              --
            </span>

          </div>
        </div>

      </div>
    </ExecutiveCard>
  );
}