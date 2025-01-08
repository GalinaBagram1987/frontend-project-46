import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";

const formats = ["json", "yml"];

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

export const readFile = (filePath) => {
  let absolutePath;
  if (path.isAbsolute(filePath) === true) {
    absolutePath = filePath;
  } else {
    const currentDir = process.cwd();
    absolutePath = path.resolve(currentDir, filePath);
  }
  const result = fs.readFileSync(absolutePath, "utf-8");
  return result;
};
//console.log(readFile(`__fixtures__ / file1.json`));
