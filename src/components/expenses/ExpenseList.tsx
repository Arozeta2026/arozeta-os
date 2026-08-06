import { prisma } from "@/lib/prisma";
import ExpenseCard from "./ExpenseCard";

export default async function ExpenseList() {
  const expenses = await prisma.expense.findMany({
    orderBy: {
      startDate: "desc",
    },
  });

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={{
            ID: expense.id.toString(),
            Concepto: expense.concept,
            Importe: expense.amount.toString(),
            Recurrencia: expense.recurrence,
            FechaInicio: expense.startDate.toISOString().split("T")[0],
            FechaFin: expense.endDate
              ? expense.endDate.toISOString().split("T")[0]
              : "",
            Estado: expense.status,
          }}
        />
      ))}
    </div>
  );
}