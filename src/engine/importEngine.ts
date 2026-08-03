import * as XLSX from "xlsx";

export interface DashboardData {
  cash: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  cashFlow: number;
  debt: number;
  netWorth: number;
  freedomScore: number;
}

export interface FinancialModel {
  dashboard: DashboardData;

  treasury: any[];
  income: any[];
  expenses: any[];
  companies: any[];
  investments: any[];
  debt: any[];
}

function readSheet(workbook: XLSX.WorkBook, name: string) {
  const sheet = workbook.Sheets[name];

  if (!sheet) {
    console.warn(`⚠ Hoja '${name}' no encontrada`);
    return [];
  }

  return XLSX.utils.sheet_to_json<any>(sheet, {
    defval: "",
    raw: false,
  });
}

function cleanRows(rows: any[]) {
  return rows.filter((row) =>
    Object.values(row).some((value) => String(value).trim() !== "")
  );
}

function number(value: any): number {
  if (value === "" || value === null || value === undefined)
    return 0;

  if (typeof value === "number")
    return value;

  const text = String(value)
    .replace(/€/g, "")
    .replace(/\s/g, "")
    .trim();

  // Formato español: 184.245,89
  if (text.includes(",")) {
    return (
      Number(
        text
          .replace(/\./g, "")
          .replace(",", ".")
      ) || 0
    );
  }

  // Formato internacional: 184245.89
  return Number(text) || 0;
}

function sum(rows: any[], column: string) {
  return rows.reduce(
    (total, row) => total + number(row[column]),
    0
  );
}

/**
 * Nuevo modelo financiero completo.
 * Todavía NO lo utiliza la aplicación.
 */
export function buildFinancialModel(
  workbook: XLSX.WorkBook
): FinancialModel {

  const treasury = cleanRows(readSheet(workbook, "Bancos"));
  const income = cleanRows(readSheet(workbook, "Ingresos"));
  const expenses = cleanRows(readSheet(workbook, "Gastos"));
  const debt = cleanRows(readSheet(workbook, "Deudas"));
  const companies = cleanRows(readSheet(workbook, "Empresas"));
  const properties = cleanRows(readSheet(workbook, "Inmuebles"));
  const investments = cleanRows(readSheet(workbook, "Inversiones"));

  console.log("");
  console.log("========== IMPORT REPORT ==========");
  console.log("Bancos:", treasury.length);
  console.log("Ingresos:", income.length);
  console.log("Gastos:", expenses.length);
  console.log("Deudas:", debt.length);
  console.log("Empresas:", companies.length);
  console.log("Inmuebles:", properties.length);
  console.log("Inversiones:", investments.length);
  console.log("===================================");

  const dashboard: DashboardData = {

    cash: sum(treasury, "Saldo"),

    monthlyIncome: sum(income, "Importe"),

    monthlyExpenses: sum(expenses, "Importe"),

    cashFlow:
      sum(income, "Importe") -
      sum(expenses, "Importe"),

    debt: sum(debt, "Capital"),

    netWorth:
      sum(companies, "Valor") +
      sum(properties, "Valor") +
      sum(investments, "Valor") -
      sum(debt, "Capital"),

    freedomScore: 82,
  };

  return {
    dashboard,
    treasury,
    income,
    expenses,
    companies,
    investments,
    debt,
  };
}

/**
 * Compatibilidad con el código actual.
 * El Dashboard sigue funcionando sin cambios.
 */
export function importWorkbook(
  workbook: XLSX.WorkBook
): DashboardData {

  return buildFinancialModel(workbook).dashboard;

}