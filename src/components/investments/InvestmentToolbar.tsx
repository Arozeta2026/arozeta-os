import Link from "next/link";
import { Plus } from "lucide-react";

export default function InvestmentToolbar() {
  return (
    <div className="flex justify-end">

      <Link
        href="/investments/new"
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500"
      >
        <Plus size={18} />

        Nueva inversión

      </Link>

    </div>
  );
}