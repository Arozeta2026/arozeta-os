interface Props {
  title: string;
  value: string;
  subtitle?: string;
  color?: "blue" | "green" | "amber" | "red";
}

export default function MetricCard({
  title,
  value,
  subtitle,
  color = "blue",
}: Props) {
  const colors = {
    blue: "border-sky-500/20",
    green: "border-emerald-500/20",
    amber: "border-amber-500/20",
    red: "border-red-500/20",
  };

  return (
    <div
      className={`rounded-2xl border bg-slate-900 p-6 transition hover:scale-[1.02] hover:border-slate-600 ${colors[color]}`}
    >
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}