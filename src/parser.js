import * as yaml from 'js-yaml';

const getParseData = (fileType, fileData) => {
  if (fileType === '.json') return JSON.parse(fileData);
  if (fileType === '.yml' || fileType === '.yaml') return yaml.load(fileData);
  return `This extension (${fileType}) is not supported by the program`;
};
export default getParseData;
