"use client";

import { useEffect, useState } from "react";
import { Recurrence } from "@prisma/client";

interface Expense {
  id: number;
  concept: string;
  amount: number;
  recurrence: Recurrence;
  startDate: string;
  endDate: string | null;
  notes: string | null;
}

interface Props {
  expenseId: string | null;
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export default function EditExpenseDrawer({
  expenseId,
  open,
  onClose,
  onSaved,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [expense, setExpense] = useState<Expense | null>(null);

  useEffect(() => {
    if (!open || !expenseId) return;

    async function loadExpense() {
      const response = await fetch(`/api/expenses/${expenseId}`);
      const data = await response.json();

      setExpense(data.expense);
    }

    loadExpense();
  }, [expenseId, open]);

  async function saveExpense() {
    if (!expense) return;

    setLoading(true);

    const response = await fetch(
      `/api/expenses/${expense.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      }
    );

    setLoading(false);

    if (!response.ok) {
      alert("No se pudo guardar.");
      return;
    }

    onSaved();
    onClose();
  }

  if (!open || !expense) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">

      <div className="h-full w-[520px] overflow-y-auto border-l border-slate-800 bg-slate-950 p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Editar gasto
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        <div className="mt-8 space-y-6">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Concepto
            </label>

            <input
              value={expense.concept}
              onChange={(e) =>
                setExpense({
                  ...expense,
                  concept: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Importe
            </label>

            <input
              type="number"
              value={expense.amount}
              onChange={(e) =>
                setExpense({
                  ...expense,
                  amount: Number(e.target.value),
                })
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Recurrencia
            </label>

            <select
              value={expense.recurrence}
              onChange={(e) =>
                setExpense({
                  ...expense,
                  recurrence: e.target.value as Recurrence,
                })
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            >
              <option value="ONCE">Único</option>
              <option value="WEEKLY">Semanal</option>
              <option value="MONTHLY">Mensual</option>
              <option value="QUARTERLY">Trimestral</option>
              <option value="SEMIANNUAL">Semestral</option>
              <option value="ANNUAL">Anual</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Notas
            </label>

            <textarea
              rows={5}
              value={expense.notes ?? ""}
              onChange={(e) =>
                setExpense({
                  ...expense,
                  notes: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />

          </div>

        </div>

        <div className="mt-10 flex gap-4">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-700 py-3 text-slate-300"
          >
            Cancelar
          </button>

          <button
            onClick={saveExpense}
            disabled={loading}
            className="flex-1 rounded-xl bg-sky-600 py-3 font-semibold text-white"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>

        </div>

      </div>

    </div>
  );
}