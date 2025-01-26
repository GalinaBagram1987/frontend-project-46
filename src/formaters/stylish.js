import _ from 'lodash';

const data = {
  added: '+ ',
  delete: '- ',
  space: '  ',
};

const getSpace = (depth, symbol) => {
  const space = '    ';
  if (!symbol) {
    return space.repeat(depth);
  }
  if (depth === 0 && !symbol) {
    return '';
  }
  return `${space.repeat(depth)}  ${symbol}`;
};

const getString = (value, level) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const lines = Object.entries(currentValue).map(([key, val]) => `${getSpace(depth + 1, data.space)}${key}: ${iter(val, depth + 1)}`);
    return ['{', ...lines, `${getSpace(depth + 1)}}`].join('\n');
  };
  return iter(value, level);
};

const getStylish = (arrayObj) => {
  const buildTree = (obj, depth) => {
    const result = obj.map((key) => {
      switch (key.mark) {
        case 'delete':
          return `${getSpace(depth, data.delete)}${key.key}: ${getString(key.val1, depth)}`;
        case 'added':
          return `${getSpace(depth, data.added)}${key.key}: ${getString(key.val2, depth)}`;
        case 'children':
          return `${getSpace(depth, data.space)}${key.key}: ${buildTree(key.value, depth + 1)}`;
        case 'change':
          return [`${getSpace(depth, data.delete)}${key.key}: ${getString(key.val1, depth)}\n${getSpace(depth, data.added)}${key.key}: ${getString(key.val2, depth)}`];
        default:
          return `${getSpace(depth, data.space)}${key.key}: ${getString(key.val1, depth)}`;
      }
    });
    return ['{', ...result, `${getSpace(depth)}}`].join('\n');
  };
  return buildTree(arrayObj, 0);
};
export default getStylish;
