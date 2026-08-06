import { prisma } from "@/lib/prisma";
import {
  Prisma,
  Recurrence,
  RecordStatus,
} from "@prisma/client";

export async function getExpenses() {
  return prisma.expense.findMany({
    orderBy: {
      startDate: "desc",
    },
  });
}

export async function getExpense(id: number) {
  return prisma.expense.findUnique({
    where: {
      id,
    },
  });
}

export async function createExpense(data: {
  concept: string;
  amount: number;
  recurrence: Recurrence;
  startDate: Date;
  endDate?: Date | null;
  status?: RecordStatus;
  notes?: string | null;
}) {
  return prisma.expense.create({
    data: {
      concept: data.concept,
      amount: data.amount,
      recurrence: data.recurrence,
      startDate: data.startDate,
      endDate: data.endDate ?? null,
      status: data.status ?? RecordStatus.ACTIVE,
      notes: data.notes ?? null,
    },
  });
}

export async function updateExpense(
  id: number,
  data: Prisma.ExpenseUpdateInput
) {
  return prisma.expense.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteExpense(id: number) {
  return prisma.expense.delete({
    where: {
      id,
    },
  });
}

export async function getMonthlyExpenseTotal() {
  const expenses = await prisma.expense.findMany({
    where: {
      status: RecordStatus.ACTIVE,
    },
  });

  return expenses.reduce((total, expense) => {
    switch (expense.recurrence) {
      case Recurrence.WEEKLY:
        return total + expense.amount * 52 / 12;

      case Recurrence.MONTHLY:
        return total + expense.amount;

      case Recurrence.QUARTERLY:
        return total + expense.amount / 3;

      case Recurrence.SEMIANNUAL:
        return total + expense.amount / 6;

      case Recurrence.ANNUAL:
        return total + expense.amount / 12;

      case Recurrence.ONCE:
      default:
        return total;
    }
  }, 0);
}

export async function getAnnualExpenseTotal() {
  const monthly = await getMonthlyExpenseTotal();

  return monthly * 12;
}

export async function getActiveExpensesCount() {
  return prisma.expense.count({
    where: {
      status: RecordStatus.ACTIVE,
    },
  });
}

export async function getRecurringExpensesCount() {
  return prisma.expense.count({
    where: {
      status: RecordStatus.ACTIVE,
      recurrence: {
        not: Recurrence.ONCE,
      },
    },
  });
}