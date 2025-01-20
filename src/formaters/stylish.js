import _ from 'lodash';

const data = {
  added: '+ ',
  deleted: '- ',
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
    const lines = Object.entries(currentValue).map(
      ([key, val]) =>
        `${getSpace(depth + 1, data.space)}${key}: ${iter(val, depth + 1)}`
    );
    return ['{', ...lines, `${getSpace(depth + 1)}}`].join('\n');
  };
  return iter(value, level);
};

const getStylish = (tree) => {
  const iter = (object, depth) => {
    const result = object.map((key) => {
      switch (key.action) {
        case 'deleted':
          return `${getSpace(depth, data.deleted)}${key.key}: ${getString(
            key.val1,
            depth
          )}`;
        case 'added':
          return `${getSpace(depth, data.added)}${key.key}: ${getString(
            key.val2,
            depth
          )}`;
        case 'nested':
          return `${getSpace(depth, data.space)}${key.key}: ${iter(
            key.children,
            depth + 1
          )}`;
        case 'changed':
          return [
            `${getSpace(depth, data.deleted)}${key.key}: ${getString(
              key.val1,
              depth
            )}\n${getSpace(depth, data.added)}${key.key}: ${getString(
              key.val2,
              depth
            )}`,
          ];
        default:
          return `${getSpace(depth, data.space)}${key.key}: ${getString(
            key.val1,
            depth
          )}`;
      }
    });
    return ['{', ...result, `${getSpace(depth)}}`].join('\n');
  };
  return iter(tree, 0);
};
export default getStylish;
