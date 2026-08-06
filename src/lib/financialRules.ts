import income from "@/data/income.json";
import expenses from "@/data/expenses.json";
import companies from "@/data/companies.json";
import investments from "@/data/investments.json";
import debt from "@/data/debt.json";

export interface FinancialInsight {
  level: "success" | "warning" | "danger" | "info";
  title: string;
  description: string;
}

export function getFinancialInsights(): FinancialInsight[] {
  const insights: FinancialInsight[] = [];

  const incomes = income as any[];
  const expenseList = expenses as any[];
  const companyList = companies as any[];
  const investmentList = investments as any[];
  const debtList = debt as any[];

  const totalIncome = incomes.reduce(
    (sum, item) => sum + Number(item.Importe || 0),
    0
  );

  const totalExpenses = expenseList.reduce(
    (sum, item) => sum + Number(item.Importe || 0),
    0
  );

  const cashFlow = totalIncome - totalExpenses;

  const savingsRate =
    totalIncome > 0
      ? (cashFlow / totalIncome) * 100
      : 0;

  const investmentsValue = investmentList
    .filter((i) => i.ID !== "")
    .reduce(
      (sum, item) => sum + Number(item.Valor || 0),
      0
    );

  const debtValue = debtList.reduce(
    (sum, item) => sum + Number(item.Capital || 0),
    0
  );

  const companiesWithoutValue = companyList.filter(
    (c) => !c.Valor
  ).length;

  // Cash Flow

  if (cashFlow > 0) {
    insights.push({
      level: "success",
      title: "Cash Flow positivo",
      description:
        "Los ingresos superan a los gastos mensuales.",
    });
  } else {
    insights.push({
      level: "danger",
      title: "Cash Flow negativo",
      description:
        "Los gastos son superiores a los ingresos.",
    });
  }

  // Savings

  insights.push({
    level:
      savingsRate >= 30
        ? "success"
        : "warning",
    title: "Tasa de ahorro",
    description: `${savingsRate.toFixed(1)} %`,
  });

  // Empresas

  if (companiesWithoutValue > 0) {
    insights.push({
      level: "warning",
      title: "Empresas sin valorar",
      description: `${companiesWithoutValue} sociedades pendientes de valoración.`,
    });
  }

  // Deuda

  if (
    investmentsValue > 0 &&
    debtValue / investmentsValue > 0.8
  ) {
    insights.push({
      level: "danger",
      title: "Nivel de deuda elevado",
      description:
        "La deuda representa una parte importante del patrimonio financiero.",
    });
  }

  return insights;
}