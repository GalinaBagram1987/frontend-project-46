import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

const selectFormat = (arrayObj, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return getStylish(arrayObj);
    case 'plain':
      return getPlain(arrayObj);
    case 'json':
      return getJson(arrayObj);
    default:
      throw new Error('Output format is not correct');
  }
};
export default selectFormat;
