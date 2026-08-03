import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export interface Income {
  id: string;
  concept: string;
  company: string;
  amount: number;
  periodicity: string;
  dueDate: string;
  status: string;
}

export function getIncome(): Income[] {
  const workbookPath = path.join(
    process.cwd(),
    "data",
    "Arozeta_Financial_Workbook_v2.0.xlsx"
  );

  if (!fs.existsSync(workbookPath)) {
    return [];
  }

  const workbook = XLSX.readFile(workbookPath);

  const sheet = workbook.Sheets["Ingresos"];

  if (!sheet) {
    return [];
  }

  const rows = XLSX.utils.sheet_to_json<any>(sheet, {
    defval: "",
    raw: false,
  });

  return rows
    .filter((r) => r.Concepto || r.Importe)
    .map((r, index) => ({
      id: String(index + 1),
      concept: r.Concepto || "",
      company: r.Empresa || "",
      amount: Number(r.Importe || 0),
      periodicity: r.Periodicidad || "",
      dueDate: r.Vencimiento || "",
      status: r.Estado || "",
    }));
}