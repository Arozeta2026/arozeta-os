import MainLayout from "@/components/layout/MainLayout";
import StatCard from "@/components/ui/StatCard";
import { getDashboard } from "@/services/dashboard";

export default function Dashboard() {

  const dashboard = getDashboard();

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <MainLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Executive Cockpit
          </h1>

          <p className="text-slate-400">
            Financial Operating System
          </p>
        </div>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Cash Position"
            value={money(dashboard.cash)}
            variation="Live"
          />

          <StatCard
            title="Net Worth"
            value={money(dashboard.netWorth)}
            variation="Live"
          />

          <StatCard
            title="Debt"
            value={money(dashboard.debt)}
            variation="Live"
            positive={false}
          />

          <StatCard
            title="Cash Flow"
            value={money(dashboard.cashFlow)}
            variation="Live"
            positive={dashboard.cashFlow >= 0}
          />

        </section>

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white mb-5">
              Financial Summary
            </h2>

            <div className="space-y-4 text-slate-300">

              <div className="flex justify-between">
                <span>Monthly Income</span>
                <strong>{money(dashboard.monthlyIncome)}</strong>
              </div>

              <div className="flex justify-between">
                <span>Monthly Expenses</span>
                <strong>{money(dashboard.monthlyExpenses)}</strong>
              </div>

              <div className="flex justify-between">
                <span>Freedom Score</span>
                <strong>{dashboard.freedomScore}</strong>
              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold text-white mb-5">
              AI Advisor
            </h2>

            <ul className="space-y-3 text-slate-300">

              <li>• Cash Flow actualizado automáticamente.</li>
              <li>• Patrimonio calculado desde el modelo financiero.</li>
              <li>• Próximamente: recomendaciones inteligentes.</li>

            </ul>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}