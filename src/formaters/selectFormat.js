import getStylish from './stylish.js';
import getPlain from './plain.js';

const selectFormat = (arrayObj, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return getStylish(arrayObj);
    case 'plain':
      return getPlain(arrayObj);
    default:
      throw new Error('Output format is not correct');
  }
};
export default selectFormat;
