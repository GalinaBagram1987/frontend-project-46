import * as yaml from 'js-yaml';
import { getExtension, readFile } from './utilits.js';

const getParseData = (filePath) => {
  const fileType = getExtension(filePath);
  const fileData = readFile(filePath);
  if (fileType === '.json') return JSON.parse(fileData);
  if (fileType === '.yml' || fileType === '.yaml') return yaml.load(fileData);
  return `This extension (${fileType}) is not supported by the program`;
};
export default getParseData;
