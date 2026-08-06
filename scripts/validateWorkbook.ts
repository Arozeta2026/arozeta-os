import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

const workbookPath = path.join(
  process.cwd(),
  "data",
  "Arozeta_Financial_Workbook_v2.0.xlsx"
);

if (!fs.existsSync(workbookPath)) {
  console.error("❌ Workbook no encontrado");
  process.exit(1);
}

const workbook = XLSX.readFile(workbookPath);

console.log("");
console.log("==========================================");
console.log("AROZETA WORKBOOK VALIDATION");
console.log("==========================================");

for (const sheetName of workbook.SheetNames) {

  const sheet = workbook.Sheets[sheetName];

  const rows = XLSX.utils.sheet_to_json<any>(sheet, {
    defval: ""
  });

  const filtered = rows.filter(r =>
    Object.values(r).some(v => String(v).trim() !== "")
  );

  console.log("");
  console.log(`📄 ${sheetName}`);

  console.log(`   Registros : ${filtered.length}`);

  if (filtered.length > 0) {

    console.log("   Columnas:");

    Object.keys(filtered[0]).forEach(c => {
      console.log(`      ✓ ${c}`);
    });

  }

}

console.log("");
console.log("==========================================");
console.log("FIN VALIDACIÓN");
console.log("==========================================");