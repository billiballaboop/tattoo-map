import fs from "fs";
import path from "path";
import Papa from "papaparse";

export function loadCSV(fileName: string) {
  const filePath = path.join(process.cwd(), "data", fileName);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data } = Papa.parse(file, { header: true, skipEmptyLines: true });
  return data;
}
