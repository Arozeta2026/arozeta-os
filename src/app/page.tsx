import StatCard from "@/components/ui/StatCard";
import { getDashboard } from "@/services/dashboard";

export default function Dashboard() {

  const dashboard = getDashboard();

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-5xl font-bold text-white">
          Executive Cockpit
        </h1>

        <p className="text-slate-400 mt-2">
          Financial Operating System
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Cash Position"
          value={`€${dashboard.cash.toLocaleString("es-ES")}`}
          variation="+4.2%"
        />

        <StatCard
          title="Net Worth"
          value={`€${dashboard.netWorth.toLocaleString("es-ES")}`}
          variation="+2.1%"
        />

        <StatCard
          title="Debt"
          value={`€${dashboard.debt.toLocaleString("es-ES")}`}
          variation="-3.4%"
          positive={false}
        />

        <StatCard
          title="Freedom Score"
          value={`${dashboard.freedomScore}`}
          variation="+5%"
        />

      </section>

    </div>
  );
}