import Card from "./Card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  variation: string;
  positive?: boolean;
}

export default function StatCard({
  title,
  value,
  variation,
  positive = true,
}: StatCardProps) {
  return (
    <Card>
      <div className="space-y-4">

        <div className="text-sm text-slate-400">
          {title}
        </div>

        <div className="text-4xl font-bold tracking-tight text-white">
          {value}
        </div>

        <div
          className={`flex items-center gap-2 text-sm ${
            positive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {positive ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}

          {variation}
        </div>

      </div>
    </Card>
  );
}