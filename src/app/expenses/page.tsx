import ExpenseToolbar from "@/components/expenses/ExpenseToolbar";
import ExpenseList from "@/components/expenses/ExpenseList";

export default function ExpensesPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <div className="flex items-end justify-between">

        <div>

          <h1 className="text-4xl font-bold tracking-tight text-white">
            Gastos
          </h1>

          <p className="mt-2 text-slate-400">
            Gestiona todos tus compromisos financieros presentes y futuros.
          </p>

        </div>

      </div>

      <ExpenseToolbar />

      <ExpenseList />

    </main>
  );
}