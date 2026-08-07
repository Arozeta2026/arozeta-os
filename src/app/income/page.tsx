import MainLayout from "@/components/layout/MainLayout";
import IncomeEditor from "@/components/income/IncomeEditor";

import { getAllIncome } from "@/repositories/incomeRepository";

export default async function IncomePage() {
  const income = await getAllIncome();

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  const recurrenceLabel: Record<string, string> = {
    ONCE: "Único",
    WEEKLY: "Semanal",
    MONTHLY: "Mensual",
    QUARTERLY: "Trimestral",
    SEMIANNUAL: "Semestral",
    ANNUAL: "Anual",
  };

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

                <th className="px-6 py-4">
                  Concepto
                </th>

                <th className="px-6 py-4">
                  Empresa
                </th>

                <th className="px-6 py-4 text-right">
                  Importe
                </th>

                <th className="px-6 py-4">
                  Recurrencia
                </th>

                <th className="px-6 py-4">
                  Estado
                </th>

                <th className="px-6 py-4 text-right">
                  Acción
                </th>

              </tr>

            </thead>

            <tbody>

              {income.map((row) => (

                <tr
                  key={row.id}
                  className="border-t border-slate-800 hover:bg-slate-800/40"
                >

                  <td className="px-6 py-4 text-white">
                    {row.concept}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {row.company?.name ?? "-"}
                  </td>

                  <td className="px-6 py-4 text-right font-semibold text-white">
                    {money(row.amount)}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {recurrenceLabel[row.recurrence] ?? row.recurrence}
                  </td>

                  <td className="px-6 py-4">

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">

                      {row.status}

                    </span>

                  </td>

                  <td className="px-6 py-4 text-right">

                    <IncomeEditor
                      income={{
                        id: row.id,
                        concept: row.concept,
                        amount: row.amount,
                        recurrence: row.recurrence,
                        status: row.status,
                      }}
                    />

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