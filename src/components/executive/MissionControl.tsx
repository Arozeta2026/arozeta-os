import KPIBar from "./KPIBar";
import ExecutiveGrid from "./ExecutiveGrid";

import TreasuryChart from "@/components/charts/TreasuryChart";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import NetWorthChart from "@/components/charts/NetWorthChart";

import UpcomingPayments from "@/components/widgets/UpcomingPayments";
import BankBalances from "@/components/widgets/BankBalances";
import AIAdvisor from "@/components/widgets/AIAdvisor";

export default function MissionControl() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <section className="flex items-end justify-between">

        <div>

          <h1 className="text-5xl font-bold tracking-tight text-white">
            Mission Control
          </h1>

          <p className="mt-2 text-slate-400">
            Executive Financial Operating System
          </p>

        </div>

        <div className="flex gap-3">

          <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300 hover:bg-slate-800">
            Consolidado
          </button>

          <button className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300 hover:bg-slate-800">
            Agosto 2026
          </button>

        </div>

      </section>

      <KPIBar />

      <ExecutiveGrid
        left={<TreasuryChart />}
        right={
          <div className="space-y-6">

            <UpcomingPayments />

            <BankBalances />

            <AIAdvisor />

          </div>
        }
        bottomLeft={<IncomeExpenseChart />}
        bottomRight={<NetWorthChart />}
      />

    </div>
  );
}