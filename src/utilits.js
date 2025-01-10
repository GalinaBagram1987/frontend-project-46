import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";
import { extname } from "path";
import _ from "lodash";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.resolve(__dirname, "..", filename);

export const readFile = (filePath) =>
  fs.readFileSync(getPath(filePath), "utf-8");

export const getExtension = (filePath) => extname(filePath);

const obj1 = {
  host: "hexlet.io",
  timeout: 50,
  proxy: "123.234.53.22",
  follow: false,
};

const obj2 = {
  timeout: 20,
  verbose: true,
  host: "hexlet.io",
};

export const getDifferent = (obj1, obj2) => {
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0)
    return {};
  const keys = _.sortBy(_.uniq([...Object.keys(obj1), ...Object.keys(obj2)]));
  return keys.reduce((acc, key) => {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] === obj2[key]) {
        acc[key] = obj1[key];
      } else {
        acc[`- ${key}`] = obj1[key];
        acc[`+ ${key}`] = obj2[key];
      }
    } else if (obj1.hasOwnProperty(key)) {
      acc[`- ${key}`] = obj1[key];
    } else if (obj2.hasOwnProperty(key)) {
      acc[`+ ${key}`] = obj2[key];
    }
    return acc;
  }, {});
};

console.log(getDifferent(obj1, obj2));
