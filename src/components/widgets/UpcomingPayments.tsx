import debt from "@/data/debt.json";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function UpcomingPayments() {
  const items = debt as any[];

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  const totalDebt = items.reduce(
    (sum, item) => sum + Number(item.Capital || 0),
    0
  );

  return (
    <ExecutiveCard
      title="Upcoming Payments"
      subtitle={`${items.length} préstamos registrados`}
    >
      <div className="space-y-4">

        {items.map((loan, index) => {

          const hasDueDate =
            loan.Vencimiento &&
            loan.Vencimiento.trim() !== "";

          return (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-800/50 p-4"
            >

              <div className="flex items-center justify-between">

                <h4 className="font-semibold text-white">
                  🏦 {loan.Entidad}
                </h4>

                <span className="font-bold text-red-400">
                  {money(Number(loan.Capital))}
                </span>

              </div>

              <div className="mt-3 space-y-2 text-sm">

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Cuota
                  </span>

                  <span className="text-white">
                    {loan.Cuota
                      ? money(Number(loan.Cuota))
                      : "No definida"}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Vencimiento
                  </span>

                  <span
                    className={
                      hasDueDate
                        ? "text-amber-300"
                        : "text-slate-500"
                    }
                  >
                    {hasDueDate
                      ? loan.Vencimiento
                      : "Sin calendario"}
                  </span>

                </div>

              </div>

            </div>
          );

        })}

        <div className="border-t border-slate-700 pt-4">

          <div className="flex items-center justify-between">

            <span className="text-lg font-semibold text-white">
              Total deuda
            </span>

            <span className="text-2xl font-bold text-red-400">
              {money(totalDebt)}
            </span>

          </div>

        </div>

      </div>
    </ExecutiveCard>
  );
}