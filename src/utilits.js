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
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);
  const allKeys = _.sortBy(_.uniq([...objKeys1, ...objKeys2])).map((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const isObjects = _.isObject(val1) && _.isObject(val2);
    if (!_.has(obj1, key)) {
      return {
        key,
        val2,
        mark: 'added',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        key,
        val1,
        mark: 'delete',
      };
    }
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (isObjects) {
        return {
          key,
          value: getDifferent(val1, val2),
          mark: 'nested',
        };
      } else if (val1 !== val2) {
        return {
          key,
          val1,
          val2,
          mark: 'change',
        };
      } else if (val1 === val2) {
        return {
          key,
          val1,
          mark: 'no change',
        };
      }
    }
  });
  return allKeys;
};

// console.log(getPath(`__fixtures__/file1.json`));
// console.log(readFile("__fixtures__/file1.json"));
// console.log(getExtension("__fixtures__/file1.json"));
// console.log(readFile('__fixtures__/expectJson.js'));
// console.log(readFile('__fixtures__/expectYML.js'));
// console.log(getExtension("__fixtures__/file1.json"));
