"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ExpenseForm() {
  const router = useRouter();

  const [concepto, setConcepto] = useState("");
  const [importe, setImporte] = useState("");
  const [recurrencia, setRecurrencia] = useState("MONTHLY");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          concepto,
          importe,
          recurrencia,
          fechaInicio,
          fechaFin,
          notes,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error guardando gasto");
      }

      router.push("/expenses");
      router.refresh();

    } catch (error) {
      console.error(error);
      alert("No se ha podido guardar el gasto.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
    >
      <div>

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Concepto
        </label>

        <input
          value={concepto}
          onChange={(e) => setConcepto(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          placeholder="Ej. Colegio"
          required
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Importe (€)
        </label>

        <input
          type="number"
          step="0.01"
          value={importe}
          onChange={(e) => setImporte(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          required
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Recurrencia
        </label>

        <select
          value={recurrencia}
          onChange={(e) => setRecurrencia(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
        >
          <option value="ONCE">Único</option>
          <option value="WEEKLY">Semanal</option>
          <option value="MONTHLY">Mensual</option>
          <option value="QUARTERLY">Trimestral</option>
          <option value="SEMIANNUAL">Semestral</option>
          <option value="ANNUAL">Anual</option>
        </select>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Fecha de inicio
          </label>

          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
            required
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-300">
            Fecha de finalización
          </label>

          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Notas
        </label>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          placeholder="Información adicional..."
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Guardando..." : "Guardar gasto"}
      </button>

    </form>
  );
}