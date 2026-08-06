export interface Expense {
  id: number;
  concept: string;
  amount: number;

  recurrence:
    | "ONCE"
    | "WEEKLY"
    | "MONTHLY"
    | "QUARTERLY"
    | "SEMIANNUAL"
    | "ANNUAL";

  startDate: string;

  endDate: string | null;

  status:
    | "ACTIVE"
    | "PAUSED"
    | "FINISHED";

  notes: string | null;
}