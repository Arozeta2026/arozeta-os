import expenses from "@/data/expenses.json";

export interface Expense {
  ID: string;
  Concepto: string;
  Empresa: string;
  Importe: string;
  Periodicidad: string;
  Vencimiento: string;
  "Pagado el": string;
  Estado: string;
}

export function getExpenses(): Expense[] {
  return expenses as Expense[];
}

export function getTotalExpenses(): number {
  return getExpenses().reduce(
    (sum, item) => sum + Number(item.Importe || 0),
    0
  );
}

export function getTopExpenses(limit = 5): Expense[] {
  return [...getExpenses()]
    .sort(
      (a, b) =>
        Number(b.Importe || 0) -
        Number(a.Importe || 0)
    )
    .slice(0, limit);
}