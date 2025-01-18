import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { extname } from 'path';
import _ from 'lodash';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getBaseDir = () => {
  return path.resolve(__dirname, '..');
};

export const getPath = (filePath) => {
  const baseDir = getBaseDir();
  const absolutePath = path.resolve(baseDir, filePath);
  return absolutePath;
};

export const readFile = (filePath) =>
  fs.readFileSync(getPath(filePath), 'utf-8');

export const getExtension = (filePath) => extname(filePath);

export const getDifferent = (obj1, obj2) => {
  if (!obj1 || !obj2) {
    return 'One of the objects is undefined or null';
  }

  // Храним результат в виде строки
  let result = '';

  const keys = _.sortBy(_.uniq([...Object.keys(obj1), ...Object.keys(obj2)]));

  keys.forEach((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (val1 === undefined) {
      result += ` + ${key}: ${JSON.stringify(val2, null, 2)}\n`;
    } else if (val2 === undefined) {
      result += ` - ${key}: ${JSON.stringify(val1, null, 2)}\n`;
    } else if (val1 === val2) {
      result += `${key}: ${val1}\n`;
    } else if (val1 !== val2) {
      // Проверяем, если оба - объекты, и не null
      if (
        typeof val1 === 'object' &&
        typeof val2 === 'object' &&
        val1 !== null &&
        val2 !== null
      ) {
        result += ` ${key}: {\n${getDifferent(val1, val2)}}\n`;
      } else {
        result += ` - ${key}: ${JSON.stringify(val1, null, 2)}\n`;
        result += ` + ${key}: ${JSON.stringify(val2, null, 2)}\n`;
      }
    }
  });

  return result;
};
// console.log(getPath(`__fixtures__/file1.json`));
// console.log(readFile("__fixtures__/file1.json"));
// console.log(getExtension("__fixtures__/file1.json"));
// console.log(readFile('__fixtures__/expectJson.js'));
// console.log(readFile('__fixtures__/expectYML.js'));
// console.log(getExtension("__fixtures__/file1.json"));
