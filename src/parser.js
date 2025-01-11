import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";
import { getExtension, readFile } from "../src/utilits.js";

export const getParseData = (filePath) => {
  const fileType = getExtension(filePath);
  const fileData = readFile(filePath);
  if (fileType === ".json") return JSON.parse(fileData);
  if (fileType === ".yml" || fileType === "yaml") return yaml.load(fileData);
  return `This extension (${fileType}) is not supported by the program`;
};

// console.log(getParseData("__fixtures__/file1.json"));
