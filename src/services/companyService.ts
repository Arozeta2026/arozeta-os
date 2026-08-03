import companies from "@/data/companies.json";

export interface Company {
  ID: string;
  Empresa: string;
  "Participación %": string;
  Valor: string;
  Dividendos: string;
  Estado: string;
}

export function getCompanies(): Company[] {
  return companies as Company[];
}

export function getCompanyCount(): number {
  return getCompanies().length;
}

export function getCompaniesValue(): number {
  return getCompanies().reduce(
    (sum, company) => sum + Number(company.Valor || 0),
    0
  );
}