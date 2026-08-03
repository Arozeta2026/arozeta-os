import treasury from "@/data/treasury.json";
import ExecutiveCard from "@/components/ui/ExecutiveCard";

export default function TreasuryWidget() {

  const items = treasury as any[];

  const total = items.reduce(
    (sum, item) => sum + Number(item.Saldo || 0),
    0
  );

  const money = (value:number)=>
    new Intl.NumberFormat("es-ES",{
      style:"currency",
      currency:"EUR",
      maximumFractionDigits:0,
    }).format(value);

  return(
    <ExecutiveCard
      title="Treasury"
      subtitle={`${items.length} cuentas`}
    >

      {total===0 ? (

        <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center">

          <p className="text-slate-400">
            No existen saldos bancarios.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Completa la hoja Treasury del Excel para activar este módulo.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {items.map((account,index)=>(

            <div
              key={index}
              className="flex justify-between rounded-xl bg-slate-800 p-4"
            >

              <div>

                <p className="font-semibold text-white">
                  {account.Banco}
                </p>

                <p className="text-sm text-slate-500">
                  {account.Titular}
                </p>

              </div>

              <span className="font-bold text-emerald-400">
                {money(Number(account.Saldo))}
              </span>

            </div>

          ))}

        </div>

      )}

    </ExecutiveCard>
  );
}