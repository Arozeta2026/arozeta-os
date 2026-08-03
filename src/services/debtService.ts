import debt from "@/data/debt.json";

export interface Debt {
  ID: string;
  Entidad: string;
  Capital: string;
  Cuota: string;
  Interés: string;
  Vencimiento: string;
  Estado: string;
}

export function getDebt(): Debt[] {
  return debt as Debt[];
}

export function getTotalDebt(): number {
  return getDebt().reduce(
    (sum, loan) => sum + Number(loan.Capital || 0),
    0
  );
}