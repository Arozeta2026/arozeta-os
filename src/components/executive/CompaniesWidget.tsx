import companies from "@/data/companies.json";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function CompaniesWidget() {
  const items = companies as any[];

  return (
    <ExecutiveCard
      title="Companies"
      subtitle={`${items.length} sociedades registradas`}
    >
      <div className="space-y-4">

        {items.map((company, index) => {

          const hasValue =
            company.Valor &&
            company.Valor.trim() !== "";

          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-4"
            >
              <div>

                <h3 className="font-semibold text-white">
                  {company.Empresa}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Participación {company["Participación %"]}
                </p>

              </div>

              <div className="text-right">

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    hasValue
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-amber-500/20 text-amber-400"
                  }`}
                >
                  {hasValue ? "Valorada" : "Pendiente"}
                </span>

                <p className="mt-2 text-sm text-slate-500">
                  {hasValue ? `${company.Valor} €` : "Sin valoración"}
                </p>

              </div>

            </div>
          );

        })}

      </div>
    </ExecutiveCard>
  );
}