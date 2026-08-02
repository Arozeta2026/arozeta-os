export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold text-white">
          Arozeta OS
        </h1>

        <p className="mt-2 text-slate-400">
          Financial Operating System
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          {
            title: "Cash Position",
            value: "€1.245.000"
          },
          {
            title: "Monthly Income",
            value: "€187.400"
          },
          {
            title: "Monthly Expenses",
            value: "€91.250"
          },
          {
            title: "Freedom Score",
            value: "82 / 100"
          }
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="text-sm text-slate-400">
              {card.title}
            </div>

            <div className="mt-3 text-3xl font-bold">
              {card.value}
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-semibold">
          Treasury Overview
        </h2>

        <p className="mt-3 text-slate-400">
          En el siguiente sprint añadiremos el gráfico de tesorería,
          comparativas Month vs Last Year, Budget y Forecast.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="font-semibold text-xl">
            Upcoming Payments
          </h3>

          <ul className="mt-5 space-y-3">
            <li>Divorcio — €7.000</li>
            <li>Hipoteca — €5.800</li>
            <li>Seguridad Social</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="font-semibold text-xl">
            Alerts
          </h3>

          <ul className="mt-5 space-y-3">
            <li>✔ Liquidez correcta</li>
            <li>✔ Sin incidencias bancarias</li>
            <li>✔ Forecast positivo</li>
          </ul>
        </div>
      </section>
    </div>
  )
}