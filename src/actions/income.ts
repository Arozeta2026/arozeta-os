"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Recurrence, RecordStatus } from "@prisma/client";

interface UpdateIncomeInput {
  concept: string;
  amount: number;
  recurrence: Recurrence;
  status: RecordStatus;
}

export async function updateIncome(
  id: number,
  data: UpdateIncomeInput
) {
  await prisma.income.update({
    where: {
      id,
    },
    data: {
      concept: data.concept,
      amount: data.amount,
      recurrence: data.recurrence,
      status: data.status,
    },
  });

  revalidatePath("/income");
}