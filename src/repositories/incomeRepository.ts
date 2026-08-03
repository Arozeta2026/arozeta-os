import { prisma } from "@/lib/prisma";

export async function getAllIncome() {
  return prisma.income.findMany({
    include: {
      company: true,
    },
    orderBy: {
      concept: "asc",
    },
  });
}