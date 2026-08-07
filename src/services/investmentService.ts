import { prisma } from "@/lib/prisma";

export async function getInvestments() {
  return prisma.investment.findMany({
    include: {
      company: true,
    },
    orderBy: {
      companyName: "asc",
    },
  });
}

export async function getInvestment(id: number) {
  return prisma.investment.findUnique({
    where: {
      id,
    },
    include: {
      company: true,
    },
  });
}

export async function createInvestment(data: {
  ticker: string;
  companyName: string;
  exchange: string;
  shares: number;
  averagePrice: number;
  currency: string;
  companyId?: number | null;
}) {
  return prisma.investment.create({
    data: {
      ticker: data.ticker,
      companyName: data.companyName,
      exchange: data.exchange,
      shares: data.shares,
      averagePrice: data.averagePrice,
      currency: data.currency,
      companyId: data.companyId ?? null,
    },
  });
}

export async function updateInvestment(
  id: number,
  data: {
    ticker?: string;
    companyName?: string;
    exchange?: string;
    shares?: number;
    averagePrice?: number;
    currency?: string;
    companyId?: number | null;
  }
) {
  return prisma.investment.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteInvestment(id: number) {
  return prisma.investment.delete({
    where: {
      id,
    },
  });
}

/**
 * Valor total de la cartera.
 * Se calcula usando el precio medio de compra.
 */
export async function getInvestmentValue() {
  const investments = await prisma.investment.findMany();

  return investments.reduce((total, investment) => {
    return total + investment.shares * investment.averagePrice;
  }, 0);
}

/**
 * Alias para mantener compatibilidad con código heredado.
 */
export async function getTotalInvestmentValue() {
  return getInvestmentValue();
}

export async function getInvestmentCount() {
  return prisma.investment.count();
}