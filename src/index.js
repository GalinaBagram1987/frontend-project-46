import { getExtension, readFile } from './utilits.js';
import getDifferent from './getDifferent.js';
import getParseData from './parser.js';
import selectFormat from './formaters/selectFormat.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fileType1 = getExtension(filePath1);
  const fileData1 = readFile(filePath1);

  const fileType2 = getExtension(filePath2);
  const fileData2 = readFile(filePath2);

  const obj1 = getParseData(fileType1, fileData1);
  const obj2 = getParseData(fileType2, fileData2);
  const dataDiff = getDifferent(obj1, obj2);

  const result = selectFormat(dataDiff, format);

  return result;
};

export default genDiff;
