import _ from 'lodash';

const getDiff2 = (obj1, obj2) => {
   
    const keys = [...new Set ([...Object.keys(obj1), ...Object.keys(obj2)])].sort()

    const diff = keys.map((key) => {
 if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
    return { key, type: 'tree', children: getDiff2(obj1[key], obj2[key]) };
  }
    if (!_.has(obj1, key)) {
    return { key, type: 'added', newValue: obj2[key] };
  }
  if (!_.has(obj2, key)) {
    return { key, type: 'deleted', newValue: obj1[key] };
  }
  if (!_.isEqual(obj1[key], obj2[key])) {
    return {
      key, type: 'changed', oldValue: obj1[key], newValue: obj2[key],
    };
  }
  return {
    key, type: 'unchanged', value: obj1[key],
  };
    })
    console.log(diff)
};
export default getDiff2
