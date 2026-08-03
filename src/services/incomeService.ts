import income from "@/data/income.json";

export interface Income {
  ID: string;
  Concepto: string;
  Empresa: string;
  Importe: string;
  Periodicidad: string;
  Vencimiento: string;
  Estado: string;
}

export function getIncome(): Income[] {
  return income as Income[];
}

export function getTotalIncome(): number {
  return getIncome().reduce(
    (sum, item) => sum + Number(item.Importe || 0),
    0
  );
}

export function getTopIncome(limit = 5): Income[] {
  return [...getIncome()]
    .sort(
      (a, b) =>
        Number(b.Importe || 0) -
        Number(a.Importe || 0)
    )
    .slice(0, limit);
}