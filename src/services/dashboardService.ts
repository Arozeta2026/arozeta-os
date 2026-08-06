import { getTotalIncome } from "./incomeService";
import { getTotalExpenses } from "./expenseService";
import { getCompanyCount } from "./companyService";
import { getInvestmentValue } from "./investmentService";
import { getTotalDebt } from "./debtService";
import { getTreasuryBalance } from "./treasuryService";

import {
  getFinancialInsights,
  FinancialInsight,
} from "@/lib/financial/insights";

export interface DashboardData {
  income: number;
  expenses: number;
  cashFlow: number;
  savingsRate: number;

  companies: number;
  investments: number;
  debt: number;
  treasury: number;

  financialNetWorth: number;

  insights: FinancialInsight[];
}

export function getDashboard(): DashboardData {
  const income = getTotalIncome();

  const expenses = getTotalExpenses();

  const cashFlow = income - expenses;

  const savingsRate =
    income > 0
      ? (cashFlow / income) * 100
      : 0;

  const companies = getCompanyCount();

  const investments = getInvestmentValue();

  const debt = getTotalDebt();

  const treasury = getTreasuryBalance();

  const financialNetWorth =
    investments +
    treasury -
    debt;

  const insights = getFinancialInsights({
    income,
    expenses,
    cashFlow,
    savingsRate,
    investments,
    debt,
    treasury,
    companies,
  });

  return {
    income,
    expenses,
    cashFlow,
    savingsRate,

    companies,
    investments,
    debt,
    treasury,

    financialNetWorth,

    insights,
  };
}