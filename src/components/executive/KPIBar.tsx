import KPICard from "@/components/ui/KPICard";
import { getDashboard } from "@/services/dashboard";

export default function KPIBar() {
  const dashboard = getDashboard();

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">

      <KPICard
        title="Caja"
        value={money(dashboard.cash)}
        change="Live"
      />

      <KPICard
        title="Patrimonio"
        value={money(dashboard.netWorth)}
        change="Live"
      />

      <KPICard
        title="Cash Flow"
        value={money(dashboard.cashFlow)}
        change={dashboard.cashFlow >= 0 ? "Positivo" : "Negativo"}
        positive={dashboard.cashFlow >= 0}
      />

      <KPICard
        title="Deuda"
        value={money(dashboard.debt)}
        change="Live"
        positive={false}
      />

      <KPICard
        title="Freedom Score"
        value={`${dashboard.freedomScore}/100`}
        change="Live"
      />

    </div>
  );
}