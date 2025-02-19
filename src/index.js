import { getExtension, readFile } from './utilits.js';
import getDifferent from './getDifferent.js';
import parseData from './parser.js';
import selectFormat from './formaters/selectFormat.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fileType1 = getExtension(filePath1);
  const fileData1 = readFile(filePath1);

  const fileType2 = getExtension(filePath2);
  const fileData2 = readFile(filePath2);

  const obj1 = parseData(fileType1, fileData1);
  const obj2 = parseData(fileType2, fileData2);
  const dataDiff = getDifferent(obj1, obj2);

  return selectFormat(dataDiff, format);
};

export default genDiff;
