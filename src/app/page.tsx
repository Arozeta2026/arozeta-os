import KpiLarge from '@/components/dashboard/KpiLarge'
import Card from '@/components/cards/Card'
import TreasuryChart from '@/components/charts/TreasuryChart'
import Sparkline from '@/components/charts/Sparkline'
import TreasurySummary from '@/components/treasury/TreasurySummary'
import { KPIS, TREASURY_SERIES, UPCOMING_PAYMENTS, UPCOMING_INCOME, ALERTS } from '@/lib/mockData'

export default function DashboardPage() {
  return (
    <div className="space-y-6 w-full">
      {/* Top KPIs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.slice(0,4).map((k) => (
          <KpiLarge
            key={k.id}
            title={k.title}
            current={k.current}
            mom={k.mom}
            yoy={k.yoy}
            trend={k.trend}
            sparkData={k.spark}
          />
        ))}
      </section>

      {/* Treasury chart */}
      <section>
        <Card className="p-4 h-[520px]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Treasury Evolution</h3>
              <p className="text-sm text-slate-400">This Month · Last Month · Last Year · Budget · Forecast</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-300">Range: Last 30 days</div>
            </div>
          </div>

          <div className="h-[420px]">
            <TreasuryChart series={TREASURY_SERIES} />
          </div>
        </Card>
      </section>

      {/* Third row */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h4 className="text-sm font-medium text-slate-300 mb-3">Upcoming Payments</h4>
              <ul className="space-y-3">
                {UPCOMING_PAYMENTS.map((p) => (
                  <li key={p.id} className="flex items-center justify-between p-3 rounded-md bg-white/2">
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-xs text-slate-400">{p.note}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{p.amount}</div>
                      <div className="text-xs text-slate-400">{p.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h4 className="text-sm font-medium text-slate-300 mb-3">Upcoming Income</h4>
              <ul className="space-y-3">
                {UPCOMING_INCOME.map((p) => (
                  <li key={p.id} className="flex items-center justify-between p-3 rounded-md bg-white/2">
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-xs text-slate-400">{p.note}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{p.amount}</div>
                      <div className="text-xs text-slate-400">{p.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card>
            <h4 className="text-sm font-medium text-slate-300 mb-3">Alerts</h4>
            <ul className="space-y-3">
              {ALERTS.map((a) => (
                <li key={a.id} className="p-3 rounded-md bg-gradient-to-r from-amber-900/10 to-rose-900/6">
                  <div className="font-medium">{a.title}</div>
                  <div className="text-xs text-slate-400">{a.detail}</div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card>
            <h4 className="text-sm font-medium text-slate-300 mb-3">Debt Summary</h4>
            <TreasurySummary />
          </Card>

          <Card>
            <h4 className="text-sm font-medium text-slate-300 mb-3">Freedom Score</h4>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center text-black font-bold text-xl">{KPIS.find(k=>k.id==='freedom')?.current}</div>
              <div className="text-sm text-slate-300">
                <div className="font-medium">{KPIS.find(k=>k.id==='freedom')?.current} / 100</div>
                <div className="text-xs text-slate-400">Liquidity & runway, diversification, debt coverage</div>
              </div>
            </div>
          </Card>

          <Card>
            <h4 className="text-sm font-medium text-slate-300 mb-3">Cash Position</h4>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Available cash</div>
                <div className="text-2xl font-semibold mt-1">{KPIS.find(k=>k.id==='cash')?.current}</div>
                <div className="text-xs text-slate-400 mt-1">Liquid reserves • Bank accounts</div>
              </div>
              <div className="w-28">
                <Sparkline data={KPIS.find(k=>k.id==='cash')!.spark} color="#60a5fa" />
              </div>
            </div>
          </Card>
        </aside>
      </section>
    </div>
  )
}
