import MainLayout from "@/components/layout/MainLayout";
import { getIncome } from "@/services/income";

export default function IncomePage() {

  const rows = getIncome();

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <MainLayout>

      <div className="space-y-8">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Income
            </h1>

            <p className="text-slate-400">
              {rows.length} records
            </p>

          </div>

          <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white">
            + New Income
          </button>

        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

          <table className="w-full">

            <thead className="bg-slate-950">

              <tr className="text-left text-slate-400">

                <th className="px-6 py-4">Concept</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Periodicity</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Status</th>

              </tr>

            </thead>

            <tbody>

              {rows.map((row) => (

                <tr
                  key={row.id}
                  className="border-t border-slate-800 hover:bg-slate-800"
                >

                  <td className="px-6 py-4 text-white">
                    {row.concept}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {row.company}
                  </td>

                  <td className="px-6 py-4 text-white font-semibold">
                    {money(row.amount)}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {row.periodicity}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {row.dueDate}
                  </td>

                  <td className="px-6 py-4">

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400 text-sm">
                      {row.status || "Active"}
                    </span>

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