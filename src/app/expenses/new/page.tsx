import ExpenseForm from "@/components/expenses/ExpenseForm";

export default function NewExpensePage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Nuevo gasto
        </h1>

        <p className="mt-2 text-slate-400">
          Añade un nuevo compromiso financiero.
        </p>

      </div>

      <ExpenseForm />

    </main>
  );
}