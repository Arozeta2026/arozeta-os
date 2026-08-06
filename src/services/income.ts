import income from "@/data/income.json";

export interface Income {
  id?: string;
  Concepto: string;
  Empresa: string;
  Importe: number;
  Periodicidad: string;
  Vencimiento: string;
  Estado: string;
}

export function getIncome(): Income[] {
  return income as Income[];
}