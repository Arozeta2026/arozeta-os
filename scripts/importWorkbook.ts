import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

const workbookPath = path.join(
  process.cwd(),
  "data",
  "Arozeta_Financial_Workbook_v2.0.xlsx"
);

if (!fs.existsSync(workbookPath)) {
  console.error("❌ No se encuentra el Workbook:");
  console.error(workbookPath);
  process.exit(1);
}

const workbook = XLSX.readFile(workbookPath);

const getSheet = (name: string) =>
  XLSX.utils.sheet_to_json<any>(workbook.Sheets[name] || {});

const sum = (rows: any[], field: string) =>
  rows.reduce((total, row) => total + (Number(row[field]) || 0), 0);

const banks = getSheet("Bancos");
const income = getSheet("Ingresos");
const expenses = getSheet("Gastos");
const debts = getSheet("Deudas");
const companies = getSheet("Empresas");
const properties = getSheet("Inmuebles");
const investments = getSheet("Inversiones");

const dashboard = {
  cash: sum(banks, "Saldo"),
  monthlyIncome: sum(income, "Importe"),
  monthlyExpenses: sum(expenses, "Importe"),
  cashFlow:
    sum(income, "Importe") -
    sum(expenses, "Importe"),
  debt: sum(debts, "Capital"),
  netWorth:
    sum(companies, "Valor") +
    sum(properties, "Valor") +
    sum(investments, "Valor") -
    sum(debts, "Capital"),
  freedomScore: 82
};

const outputDir = path.join(process.cwd(), "src", "data");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, "dashboard.json"),
  JSON.stringify(dashboard, null, 2)
);

console.log("✅ dashboard.json generado correctamente");