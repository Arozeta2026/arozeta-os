import InvestmentHeader from "@/components/investments/InvestmentHeader";
import InvestmentToolbar from "@/components/investments/InvestmentToolbar";

export default function InvestmentsPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <InvestmentHeader />

      <InvestmentToolbar />

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <p className="text-slate-400">
          Portfolio Engine v1
        </p>

      </div>

    </main>
  );
}