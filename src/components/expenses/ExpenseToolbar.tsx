import Link from "next/link";

export default function ExpenseToolbar() {
  return (
    <div className="mb-8 flex items-center justify-between">

      <input
        type="text"
        placeholder="Buscar gasto..."
        className="w-80 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <Link
        href="/expenses/new"
        className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        + Nuevo gasto
      </Link>

    </div>
  );
}