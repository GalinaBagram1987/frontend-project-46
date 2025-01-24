// import { fileURLToPath } from "url";
// import fs from "fs";
// import path from "path";
// import * as yaml from "js-yaml";
// import { extname } from "path";
// import _ from "lodash";
// import { getPath, readFile, getExtension, getDifferent } from './utilits.js';
import { getDifferent } from './utilits.js';

import getParseData from './parser.js';
import getStylish from './formaters/stylish.js';

const genDiff = (filePath1, filePath2) => {
  const obj1 = getParseData(filePath1);
  const obj2 = getParseData(filePath2);
  const dataDiff = getDifferent(obj1, obj2);
  const result = getStylish(dataDiff);
  // return dataDiff;
  return result;
};

export default genDiff;
// console.log(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json'));
