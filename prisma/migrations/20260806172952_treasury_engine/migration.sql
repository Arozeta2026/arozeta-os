/*
  Warnings:

  - Added the required column `name` to the `BankAccount` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BankAccount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "iban" TEXT,
    "owner" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "balance" REAL NOT NULL DEFAULT 0,
    "availableBalance" REAL NOT NULL DEFAULT 0,
    "accountType" TEXT NOT NULL DEFAULT 'CHECKING',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BankAccount" ("balance", "bank", "createdAt", "currency", "iban", "id", "owner", "status", "updatedAt") SELECT "balance", "bank", "createdAt", "currency", "iban", "id", "owner", "status", "updatedAt" FROM "BankAccount";
DROP TABLE "BankAccount";
ALTER TABLE "new_BankAccount" RENAME TO "BankAccount";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
