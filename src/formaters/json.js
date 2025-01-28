import _ from 'lodash';

const getJson = (arrayObj) => {
  const buildTree = (obj) => {
    if (!_.isObject(obj)) {
      return typeof obj === 'string' ? `${obj}` : obj;
    }
    return Object.entries(obj).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: buildTree(value),
    }), {});
  };
  return JSON.stringify(buildTree(arrayObj), null, 4);
};

export default getJson;
