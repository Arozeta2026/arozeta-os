export interface FinancialInsight {
  title: string;
  description: string;
  severity: "success" | "warning" | "danger";
}

export interface DashboardInput {
  income: number;
  expenses: number;
  cashFlow: number;
  savingsRate: number;

  investments: number;
  debt: number;
  treasury: number;

  companies: number;
}

export function getFinancialInsights(
  dashboard: DashboardInput
): FinancialInsight[] {

  const insights: FinancialInsight[] = [];

  if (dashboard.cashFlow > 0) {
    insights.push({
      title: "Cash Flow positivo",
      description:
        "Tus ingresos cubren los gastos mensuales.",
      severity: "success",
    });
  } else {
    insights.push({
      title: "Cash Flow negativo",
      description:
        "Los gastos superan los ingresos.",
      severity: "danger",
    });
  }

  if (dashboard.savingsRate >= 30) {
    insights.push({
      title: "Excelente capacidad de ahorro",
      description:
        `Ahorras el ${dashboard.savingsRate.toFixed(1)} % de tus ingresos.`,
      severity: "success",
    });
  } else if (dashboard.savingsRate >= 10) {
    insights.push({
      title: "Capacidad de ahorro moderada",
      description:
        `Ahorras el ${dashboard.savingsRate.toFixed(1)} % de tus ingresos.`,
      severity: "warning",
    });
  } else {
    insights.push({
      title: "Capacidad de ahorro baja",
      description:
        "Conviene revisar los gastos recurrentes.",
      severity: "danger",
    });
  }

  if (dashboard.debt > dashboard.investments) {
    insights.push({
      title: "Deuda elevada",
      description:
        "La deuda supera el valor de las inversiones financieras.",
      severity: "warning",
    });
  }

  if (dashboard.treasury === 0) {
    insights.push({
      title: "Tesorería pendiente",
      description:
        "No existen saldos bancarios registrados.",
      severity: "warning",
    });
  }

  if (dashboard.companies > 0) {
    insights.push({
      title: "Empresas registradas",
      description:
        `${dashboard.companies} sociedades forman parte del patrimonio.`,
      severity: "success",
    });
  }

  return insights;
}