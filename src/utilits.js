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
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0)
    return '';
  const keys = _.sortBy(_.uniq([...Object.keys(obj1), ...Object.keys(obj2)]));
  return keys.reduce((acc, key) => {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] === obj2[key]) {
        acc += `    ${key}: ${obj1[key]}\n`;
      } else {
        acc += `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`;
      }
    } else if (obj1.hasOwnProperty(key)) {
      acc += `  - ${key}: ${obj1[key]}\n`;
    } else if (obj2.hasOwnProperty(key)) {
      acc += `  + ${key}: ${obj2[key]}\n}`;
    }
    return acc;
  }, '{\n');
};

// console.log(getPath(`__fixtures__/file1.json`));
// console.log(readFile("__fixtures__/file1.json"));
// console.log(getExtension("__fixtures__/file1.json"));
// console.log(readFile('__fixtures__/expectJson.js'));
// console.log(readFile('__fixtures__/expectYML.js'));
