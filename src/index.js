import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";
import { extname } from "path";
import _ from "lodash";
import { getPath, readFile, getExtension, getDifferent } from "./utilits.js";
import { getParseData } from "./parser.js";

export const genDiff = (filePath1, filePath2) => {
  const obj1 = getParseData(filePath1);
  const obj2 = getParseData(filePath2);
  const result = getDifferent(obj1, obj2);
  return result;
};
// console.log(genDiff("__fixtures__/file1.json", "__fixtures__/file2.json"));
