import _ from 'lodash';

const getDifferent = (obj1, obj2) => {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);
  const allKeys = _.sortBy(_.union([...objKeys1, ...objKeys2]));
  const diff = allKeys.map((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (!_.has(obj1, key)) {
      return {
        key,
        val2,
        mark: 'added',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        key,
        val1,
        mark: 'delete',
      };
    }
    if (_.isPlainObject(val1) && _.isPlainObject(val2)) {
      return {
        key,
        value: getDifferent(val1, val2),
        mark: 'children',
      };
    }
    if (!_.isEqual(val1, val2)) {
      return {
        key,
        val1,
        val2,
        mark: 'change',
      };
    }
    return {
      key,
      val1,
      mark: 'noChange',
    };
  });
  return diff;
};
export default getDifferent;
