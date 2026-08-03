import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

import { buildFinancialModel } from "../src/engine/importEngine";

const workbookPath = path.join(
  process.cwd(),
  "data",
  "Arozeta_Financial_Workbook_v2.0.xlsx"
);

if (!fs.existsSync(workbookPath)) {
  console.error("❌ Workbook no encontrado");
  process.exit(1);
}

console.log("");
console.log("========================================");
console.log("      AROZETA IMPORT ENGINE");
console.log("========================================");

const workbook = XLSX.readFile(workbookPath);

const model = buildFinancialModel(workbook);

const outputDir = path.join(
  process.cwd(),
  "src",
  "data"
);

function save(name: string, data: any) {
  fs.writeFileSync(
    path.join(outputDir, `${name}.json`),
    JSON.stringify(data, null, 2)
  );

  console.log(`✅ ${name}.json generado`);
}

save("dashboard", model.dashboard);
save("treasury", model.treasury);
save("income", model.income);
save("expenses", model.expenses);
save("companies", model.companies);
save("investments", model.investments);
save("debt", model.debt);

console.log("");
console.log("========================================");
console.log("IMPORTACIÓN FINALIZADA");
console.log("========================================");