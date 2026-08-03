import { getTotalIncome } from "./incomeService";
import { getTotalExpenses } from "./expenseService";
import { getCompanyCount } from "./companyService";
import { getInvestmentValue } from "./investmentService";
import { getTotalDebt } from "./debtService";
import { getTreasuryBalance } from "./treasuryService";

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
  };
}