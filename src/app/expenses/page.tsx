import { prisma } from "@/lib/prisma";

import ExpenseHeader from "@/components/expenses/ExpenseHeader";
import ExpenseToolbar from "@/components/expenses/ExpenseToolbar";
import ExpenseList from "@/components/expenses/ExpenseList";

export default async function ExpensesPage() {
  const expenses = await prisma.expense.findMany();

  const activeExpenses = expenses.filter(
    (expense) => expense.status === "ACTIVE"
  );

  const recurringExpenses = expenses.filter(
    (expense) => expense.recurrence !== "ONCE"
  );

  const totalMonthly = activeExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalAnnual = activeExpenses.reduce((sum, expense) => {
    switch (expense.recurrence) {
      case "WEEKLY":
        return sum + expense.amount * 52;

      case "MONTHLY":
        return sum + expense.amount * 12;

      case "QUARTERLY":
        return sum + expense.amount * 4;

      case "SEMIANNUAL":
        return sum + expense.amount * 2;

      case "ANNUAL":
        return sum + expense.amount;

      case "ONCE":
      default:
        return sum;
    }
  }, 0);

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">
      <ExpenseHeader
        totalMonthly={totalMonthly}
        totalAnnual={totalAnnual}
        activeExpenses={activeExpenses.length}
        recurringExpenses={recurringExpenses.length}
      />

      <ExpenseToolbar />

      <ExpenseList />
    </main>
  );
}