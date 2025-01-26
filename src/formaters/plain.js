const getString = (value) => {
  switch (typeof value) {
    case 'object':
      return value == null ? value : '[complex value]';
    case 'string':
      return `'${value}'`;
    default:
      return value;
  }
};

const data = {
  added: 'was added with value:',
  delete: 'was removed',
  change: 'was updated. From',
};

const getPlain = (arrayObj) => {
  const buildTree = (obj, path) => {
    const result = obj.map((key) => {
      const fullKey = `${path}${key.key}`;
      switch (key.mark) {
        case 'delete':
          return `Property '${fullKey}' ${data.delete}`;
        case 'added':
          return `Property '${fullKey}' ${data.added} ${getString(key.val2)}`;
        case 'children':
          return buildTree(key.value, `${fullKey}.`);
        case 'change':
          return `Property '${fullKey}' ${data.change} ${getString(key.val1)} to ${getString(key.val2)}`;
        default:
          return null;
      }
    });
    return result.filter((item) => item != null).join('\n');
  };
  return buildTree(arrayObj, '');
};
export default getPlain;
