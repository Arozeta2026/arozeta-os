"use client";

import { useState } from "react";
import { Recurrence, RecordStatus } from "@prisma/client";

import SidePanel from "@/components/forms/SidePanel";
import { updateIncome } from "@/actions/income";

interface Props {
  income: {
    id: number;
    concept: string;
    amount: number;
    recurrence: Recurrence;
    status: RecordStatus;
  };
}

export default function IncomeEditor({ income }: Props) {
  const [open, setOpen] = useState(false);

  const [concept, setConcept] = useState(income.concept);
  const [amount, setAmount] = useState(income.amount);

  const [recurrence, setRecurrence] = useState<Recurrence>(
    income.recurrence
  );

  const [status, setStatus] = useState<RecordStatus>(
    income.status
  );

  async function save() {
    await updateIncome(income.id, {
      concept,
      amount,
      recurrence,
      status,
    });

    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg border border-slate-700 px-3 py-1 text-slate-300 hover:bg-slate-700"
      >
        Editar
      </button>

      <SidePanel
        open={open}
        onClose={() => setOpen(false)}
      >
        <h2 className="mb-8 text-2xl font-bold text-white">
          Editar ingreso
        </h2>

        <div className="space-y-5">

          <input
            className="w-full rounded-lg bg-slate-800 p-3 text-white"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
          />

          <input
            className="w-full rounded-lg bg-slate-800 p-3 text-white"
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(Number(e.target.value))
            }
          />

          <select
            className="w-full rounded-lg bg-slate-800 p-3 text-white"
            value={recurrence}
            onChange={(e) =>
              setRecurrence(e.target.value as Recurrence)
            }
          >
            <option value="ONCE">Único</option>
            <option value="WEEKLY">Semanal</option>
            <option value="MONTHLY">Mensual</option>
            <option value="QUARTERLY">Trimestral</option>
            <option value="SEMIANNUAL">Semestral</option>
            <option value="ANNUAL">Anual</option>
          </select>

          <select
            className="w-full rounded-lg bg-slate-800 p-3 text-white"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as RecordStatus)
            }
          >
            <option value="ACTIVE">Activo</option>
            <option value="INACTIVE">Inactivo</option>
            <option value="COMPLETED">Completado</option>
            <option value="CANCELLED">Cancelado</option>
          </select>

          <button
            onClick={save}
            className="w-full rounded-xl bg-indigo-600 p-3 font-semibold text-white hover:bg-indigo-500"
          >
            Guardar
          </button>

        </div>
      </SidePanel>
    </>
  );
}