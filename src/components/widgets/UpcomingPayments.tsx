import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function UpcomingPayments() {
  return (
    <ExecutiveCard
      title="Próximos pagos"
      subtitle="Calendario financiero"
    >
      <div className="space-y-4">

        <div className="rounded-xl bg-slate-800 p-4">
          <p className="font-semibold text-white">
            Sin pagos pendientes
          </p>

          <p className="text-sm text-slate-500">
            Se conectará con Debt
          </p>
        </div>

      </div>
    </ExecutiveCard>
  );
}