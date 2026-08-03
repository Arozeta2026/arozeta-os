import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

export interface DashboardData {
  cash: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  cashFlow: number;
  debt: number;
  netWorth: number;
  freedomScore: number;
}

export function loadWorkbook(): DashboardData {

  const workbookPath = path.join(
    process.cwd(),
    "data",
    "Arozeta_Financial_Workbook_v2.0.xlsx"
  );

  // Si el archivo no existe devolvemos datos vacíos
  if (!fs.existsSync(workbookPath)) {

    console.warn("Workbook no encontrado.");

    return {
      cash: 0,
      monthlyIncome: 0,
      monthlyExpenses: 0,
      cashFlow: 0,
      debt: 0,
      netWorth: 0,
      freedomScore: 0,
    };

  }

  const workbook = XLSX.readFile(workbookPath);

  const getSheet = (name: string) =>
    XLSX.utils.sheet_to_json<any>(workbook.Sheets[name] || {});

  const banks = getSheet("Bancos");
  const income = getSheet("Ingresos");
  const expenses = getSheet("Gastos");
  const debts = getSheet("Deudas");
  const companies = getSheet("Empresas");
  const properties = getSheet("Inmuebles");
  const investments = getSheet("Inversiones");

  const sum = (rows: any[], field: string) =>
    rows.reduce((t, r) => t + (Number(r[field]) || 0), 0);

  const cash = sum(banks, "Saldo");
  const monthlyIncome = sum(income, "Importe");
  const monthlyExpenses = sum(expenses, "Importe");
  const debt = sum(debts, "Capital");
  const companiesValue = sum(companies, "Valor");
  const propertiesValue = sum(properties, "Valor");
  const investmentsValue = sum(investments, "Valor");

  return {
    cash,
    monthlyIncome,
    monthlyExpenses,
    cashFlow: monthlyIncome - monthlyExpenses,
    debt,
    netWorth:
      companiesValue +
      propertiesValue +
      investmentsValue -
      debt,
    freedomScore: 82,
  };

}