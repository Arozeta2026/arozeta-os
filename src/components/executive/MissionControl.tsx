import KPIBar from "./KPIBar";
import ExecutiveGrid from "./ExecutiveGrid";
import ExecutiveSummary from "./ExecutiveSummary";

import IncomeWidget from "@/components/widgets/IncomeWidget";
import ExpensesWidget from "@/components/widgets/ExpensesWidget";
import CompaniesWidget from "@/components/widgets/CompaniesWidget";
import TreasuryWidget from "@/components/widgets/TreasuryWidget";
import UpcomingPayments from "@/components/widgets/UpcomingPayments";
import AIAdvisor from "@/components/widgets/AIAdvisor";

import NetWorthChart from "@/components/charts/NetWorthChart";

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
            Financial Operating System
          </p>

        </div>

      </section>

      <KPIBar />

      <ExecutiveSummary />

      <ExecutiveGrid>

        <div className="grid grid-cols-2 gap-6">
          <IncomeWidget />
          <ExpensesWidget />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <NetWorthChart />
          <TreasuryWidget />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <CompaniesWidget />
          <UpcomingPayments />
        </div>

        <AIAdvisor />

      </ExecutiveGrid>

    </div>
  );
}