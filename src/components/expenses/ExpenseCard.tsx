"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import EditExpenseDrawer from "./EditExpenseDrawer";

interface Expense {
  ID: string;
  Concepto: string;
  Importe: string;
  Recurrencia: string;
  FechaInicio: string;
  FechaFin: string;
  Estado: string;
}

interface Props {
  expense: Expense;
}

export default function ExpenseCard({ expense }: Props) {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const money = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);

  async function deleteExpense() {
    const confirmed = window.confirm(
      `¿Eliminar el gasto "${expense.Concepto}"?`
    );

    if (!confirmed) return;

    const response = await fetch(`/api/expenses/${expense.ID}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const data = await response.json();
      alert(data.message);
      return;
    }

    router.refresh();
  }

  return (
    <>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-slate-700">

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-lg font-semibold text-white">
              {expense.Concepto}
            </h3>

            <p className="mt-1 text-slate-400">
              {money(Number(expense.Importe))}
              {" · "}
              {expense.Recurrencia}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {expense.FechaInicio}
              {" → "}
              {expense.FechaFin || "∞"}
            </p>

          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              expense.Estado === "ACTIVE"
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-slate-700 text-slate-300"
            }`}
          >
            {expense.Estado}
          </span>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            onClick={() => setDrawerOpen(true)}
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
          >
            ✏️ Editar
          </button>

          <button
            onClick={deleteExpense}
            className="rounded-lg border border-red-700 px-4 py-2 text-sm text-red-400 transition hover:bg-red-900/20"
          >
            🗑 Eliminar
          </button>

        </div>

      </div>

      <EditExpenseDrawer
        expenseId={expense.ID}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSaved={() => router.refresh()}
      />
    </>
  );
}