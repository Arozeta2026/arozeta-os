import ExecutiveCard from "./ExecutiveCard";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
}

export default function KPICard({
  title,
  value,
  change,
  positive = true,
}: KPICardProps) {
  return (
    <ExecutiveCard className="h-full">

      <div className="flex h-full flex-col justify-between">

        <div>

          <p className="text-sm uppercase tracking-wider text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">
            {value}
          </h2>

        </div>

        <div className="mt-8 flex items-center justify-between">

          {change ? (

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                positive
                  ? "bg-emerald-500/15 text-emerald-400"
                  : "bg-red-500/15 text-red-400"
              }`}
            >
              {change}
            </span>

          ) : (
            <span />
          )}

          <div className="flex items-end gap-1">

            <div className="h-3 w-1 rounded bg-sky-600" />
            <div className="h-5 w-1 rounded bg-sky-500" />
            <div className="h-4 w-1 rounded bg-sky-400" />
            <div className="h-7 w-1 rounded bg-sky-500" />
            <div className="h-6 w-1 rounded bg-sky-400" />
            <div className="h-8 w-1 rounded bg-sky-300" />

          </div>

        </div>

      </div>

    </ExecutiveCard>
  );
}