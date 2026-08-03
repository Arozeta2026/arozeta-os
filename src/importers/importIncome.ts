import * as XLSX from "xlsx";
import { prisma } from "@/lib/prisma";

export async function importIncome(workbook: XLSX.WorkBook) {

  const sheet = workbook.Sheets["Ingresos"];

  if (!sheet) {
    console.log("Hoja Ingresos no encontrada");
    return;
  }

  const rows = XLSX.utils.sheet_to_json<any>(sheet, {
    defval: "",
    raw: false,
  });

  await prisma.income.deleteMany();

  for (const row of rows) {

    if (!row.Concepto && !row.Importe)
      continue;

    await prisma.income.create({

      data: {

        concept: row.Concepto || "",

        amount: Number(row.Importe || 0),

        periodicity: row.Periodicidad || null,

        status: row.Estado || null,

      },

    });

  }

  console.log("✓ Income importado:", rows.length);

}