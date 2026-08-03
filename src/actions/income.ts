"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateIncome(
  id: number,
  data: {
    concept: string;
    amount: number;
    periodicity: string;
    status: string;
  }
) {
  await prisma.income.update({
    where: {
      id,
    },
    data: {
      concept: data.concept,
      amount: data.amount,
      periodicity: data.periodicity,
      status: data.status,
    },
  });

  revalidatePath("/income");
}