import treasury from "@/data/treasury.json";

export interface TreasuryAccount {
  ID: string;
  Banco: string;
  IBAN: string;
  Titular: string;
  Saldo: string;
  Moneda: string;
  Estado: string;
}

export function getTreasuryAccounts(): TreasuryAccount[] {
  return treasury as TreasuryAccount[];
}

export function getTreasuryBalance(): number {
  return getTreasuryAccounts().reduce(
    (sum, account) => sum + Number(account.Saldo || 0),
    0
  );
}