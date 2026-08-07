import { prisma } from "@/lib/prisma";
import {
  Prisma,
  Recurrence,
  RecordStatus,
} from "@prisma/client";

export async function getIncomes() {
  return prisma.income.findMany({
    include: {
      company: true,
    },
    orderBy: {
      startDate: "desc",
    },
  });
}

export async function getAllIncome() {
  return prisma.income.findMany({
    where: {
      status: RecordStatus.ACTIVE,
    },
    include: {
      company: true,
    },
    orderBy: {
      concept: "asc",
    },
  });
}

export async function getIncome(id: number) {
  return prisma.income.findUnique({
    where: {
      id,
    },
    include: {
      company: true,
    },
  });
}

export async function createIncome(data: {
  concept: string;
  amount: number;
  recurrence: Recurrence;
  startDate: Date;
  endDate?: Date | null;
  status?: RecordStatus;
  notes?: string | null;
}) {
  return prisma.income.create({
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

export async function updateIncome(
  id: number,
  data: Prisma.IncomeUpdateInput
) {
  return prisma.income.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteIncome(id: number) {
  return prisma.income.delete({
    where: {
      id,
    },
  });
}

export async function getMonthlyIncomeTotal() {
  const incomes = await prisma.income.findMany({
    where: {
      status: RecordStatus.ACTIVE,
    },
  });

  return incomes.reduce((total, income) => {
    switch (income.recurrence) {
      case Recurrence.WEEKLY:
        return total + (income.amount * 52) / 12;

      case Recurrence.MONTHLY:
        return total + income.amount;

      case Recurrence.QUARTERLY:
        return total + income.amount / 3;

      case Recurrence.SEMIANNUAL:
        return total + income.amount / 6;

      case Recurrence.ANNUAL:
        return total + income.amount / 12;

      case Recurrence.ONCE:
      default:
        return total;
    }
  }, 0);
}

export async function getAnnualIncomeTotal() {
  const monthly = await getMonthlyIncomeTotal();
  return monthly * 12;
}

/**
 * Compatibilidad con widgets antiguos
 */
export async function getTotalIncome() {
  return getAnnualIncomeTotal();
}

export async function getTopIncome(limit = 5) {
  return prisma.income.findMany({
    where: {
      status: RecordStatus.ACTIVE,
    },
    include: {
      company: true,
    },
    orderBy: {
      amount: "desc",
    },
    take: limit,
  });
}

export async function getActiveIncomesCount() {
  return prisma.income.count({
    where: {
      status: RecordStatus.ACTIVE,
    },
  });
}

export async function getRecurringIncomesCount() {
  return prisma.income.count({
    where: {
      status: RecordStatus.ACTIVE,
      recurrence: {
        not: Recurrence.ONCE,
      },
    },
  });
}