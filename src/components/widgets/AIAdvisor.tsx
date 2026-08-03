import ExecutiveCard from "@/components/ui/ExecutiveCard";
import {
  getFinancialInsights,
  FinancialInsight,
} from "@/lib/financialRules";

export default function AIAdvisor() {
  const insights = getFinancialInsights();

  const colorClasses: Record<
    FinancialInsight["level"],
    {
      border: string;
      bg: string;
      icon: string;
    }
  > = {
    success: {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
      icon: "🟢",
    },
    warning: {
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
      icon: "🟡",
    },
    danger: {
      border: "border-red-500/30",
      bg: "bg-red-500/10",
      icon: "🔴",
    },
    info: {
      border: "border-sky-500/30",
      bg: "bg-sky-500/10",
      icon: "🔵",
    },
  };

  return (
    <ExecutiveCard
      title="AI Advisor"
      subtitle="Financial Intelligence Engine"
    >
      <div className="space-y-4">

        {insights.map((insight, index) => {

          const style = colorClasses[insight.level];

          return (
            <div
              key={index}
              className={`
                rounded-2xl
                border
                p-4
                ${style.border}
                ${style.bg}
              `}
            >

              <div className="flex items-start gap-3">

                <div className="text-xl">
                  {style.icon}
                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    {insight.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-300">
                    {insight.description}
                  </p>

                </div>

              </div>

            </div>
          );

        })}

      </div>
    </ExecutiveCard>
  );
}