import _ from 'lodash';

const getJson = (arrayObj) => {
  const buildTree = (obj) => {
    const result = {};
    if (!_.isObject(obj)) {
      return typeof obj === 'string' ? `${obj}` : obj;
    }
    Object.entries(obj).forEach(([key, value]) => {
      result[key] = buildTree(value);
    });
    return result;
  };
  return JSON.stringify(buildTree(arrayObj), null, 4);
};

export default getJson;
