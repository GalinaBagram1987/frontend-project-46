import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";
import { extname } from "path";

const formats = ["json", "yml"];

export const readFile = (filePath) => {
  const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, "utf-8");
};

export const getExtension = (filePath) => extname(filePath);
