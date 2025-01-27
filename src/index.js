import { getDifferent } from './utilits.js';

import getParseData from './parser.js';
import selectFormat from './formaters/selectFormat.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const obj1 = getParseData(filePath1);
  const obj2 = getParseData(filePath2);
  const dataDiff = getDifferent(obj1, obj2);

  const result = selectFormat(dataDiff, format);

  return result;
};

export default genDiff;
