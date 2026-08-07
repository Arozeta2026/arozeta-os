import * as XLSX from "xlsx";
import { prisma } from "@/lib/prisma";
import { Recurrence, RecordStatus } from "@prisma/client";

function mapRecurrence(value: string): Recurrence {
  const recurrence = value.trim().toLowerCase();

  switch (recurrence) {
    case "semanal":
      return Recurrence.WEEKLY;

    case "mensual":
      return Recurrence.MONTHLY;

    case "trimestral":
      return Recurrence.QUARTERLY;

    case "semestral":
      return Recurrence.SEMIANNUAL;

    case "anual":
      return Recurrence.ANNUAL;

    case "único":
    case "unico":
    default:
      return Recurrence.ONCE;
  }
}

function mapStatus(value: string): RecordStatus {
  const status = value.trim().toLowerCase();

  switch (status) {
    case "activo":
      return RecordStatus.ACTIVE;

    case "inactivo":
    case "pausado":
      return RecordStatus.PAUSED;

    case "completado":
    case "finalizado":
      return RecordStatus.FINISHED;

    default:
      return RecordStatus.ACTIVE;
  }
}

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
    if (!row.Concepto && !row.Importe) {
      continue;
    }

    await prisma.income.create({
      data: {
        concept: row.Concepto || "",

        amount: Number(row.Importe || 0),

        recurrence: mapRecurrence(row.Periodicidad || ""),

        status: mapStatus(row.Estado || ""),

        startDate: new Date(),

        endDate: null,

        notes: null,
      },
    });
  }

  console.log(`✓ Income importado: ${rows.length}`);
}