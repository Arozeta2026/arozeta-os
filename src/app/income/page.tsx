import MainLayout from "@/components/layout/MainLayout";
import { getIncome } from "@/services/income";

export default function IncomePage() {

  const income = getIncome();

  const money = (value: string) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(Number(value || 0));

  return (

    <MainLayout>

      <div className="space-y-8">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Income
            </h1>

            <p className="text-slate-400">
              {income.length} ingresos
            </p>

          </div>

          <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-500">
            + Nuevo ingreso
          </button>

        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

          <table className="w-full">

            <thead className="bg-slate-950">

              <tr className="text-left text-slate-400">

                <th className="px-6 py-4">Concepto</th>
                <th className="px-6 py-4">Empresa</th>
                <th className="px-6 py-4">Importe</th>
                <th className="px-6 py-4">Periodicidad</th>
                <th className="px-6 py-4">Vencimiento</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4"></th>

              </tr>

            </thead>

            <tbody>

              {income.map((row, index) => (

                <tr
                  key={index}
                  className="border-t border-slate-800 hover:bg-slate-800/40"
                >

                  <td className="px-6 py-4 text-white">
                    {row.Concepto}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {row.Empresa}
                  </td>

                  <td className="px-6 py-4 text-white font-semibold">
                    {money(row.Importe)}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {row.Periodicidad}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {row.Vencimiento || "-"}
                  </td>

                  <td className="px-6 py-4">

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                      {row.Estado || "Activo"}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-right">

                    <button className="rounded-lg border border-slate-700 px-3 py-1 text-slate-300 hover:bg-slate-700">
                      Editar
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>

  );

}