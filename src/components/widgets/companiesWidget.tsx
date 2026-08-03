import companies from "@/data/companies.json";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function CompaniesWidget() {
  const items = companies as any[];

  return (
    <ExecutiveCard
      title="Companies"
      subtitle={`${items.length} sociedades`}
    >
      <div className="space-y-4">

        {items.map((company, index) => {

          const hasValue =
            company.Valor &&
            company.Valor !== "";

          return (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-800/50 p-4"
            >

              <div className="flex justify-between">

                <div>

                  <h4 className="font-semibold text-white">
                    {company.Empresa}
                  </h4>

                  <p className="text-sm text-slate-400">
                    Participación {company["Participación %"]}
                  </p>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    hasValue
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-amber-500/20 text-amber-400"
                  }`}
                >
                  {hasValue ? "Valorada" : "Pendiente"}
                </span>

              </div>

            </div>
          );

        })}

      </div>
    </ExecutiveCard>
  );
}