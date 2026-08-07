import {
  getMonthlyExpenseTotal,
  getAnnualExpenseTotal,
  getActiveExpensesCount,
  getRecurringExpensesCount,
} from "./expenseService";

import { getTotalIncome } from "./incomeService";
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
  annualExpenses: number;
  cashFlow: number;
  savingsRate: number;

  companies: number;
  investments: number;
  debt: number;
  treasury: number;

  financialNetWorth: number;

  activeExpenses: number;
  recurringExpenses: number;

  insights: FinancialInsight[];
}

export async function getDashboard(): Promise<DashboardData> {
  const [
    expenses,
    annualExpenses,
    activeExpenses,
    recurringExpenses,
    income,
    companies,
    investments,
    debt,
    treasury,
  ] = await Promise.all([
    getMonthlyExpenseTotal(),
    getAnnualExpenseTotal(),
    getActiveExpensesCount(),
    getRecurringExpensesCount(),
    getTotalIncome(),
    getCompanyCount(),
    getInvestmentValue(),
    getTotalDebt(),
    getTreasuryBalance(),
  ]);

  const cashFlow = income - expenses;

  const savingsRate =
    income > 0 ? (cashFlow / income) * 100 : 0;

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
    annualExpenses,
    cashFlow,
    savingsRate,

    companies,
    investments,
    debt,
    treasury,

    financialNetWorth,

    activeExpenses,
    recurringExpenses,

    insights,
  };
}