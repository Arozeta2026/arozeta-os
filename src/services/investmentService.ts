import investments from "@/data/investments.json";

export interface Investment {
  ID: string;
  Activo: string;
  Tipo: string;
  Valor: string;
  Rentabilidad: string;
}

export function getInvestments(): Investment[] {
  return investments as Investment[];
}

export function getInvestmentValue(): number {
  return getInvestments().reduce(
    (sum, investment) => sum + Number(investment.Valor || 0),
    0
  );
}