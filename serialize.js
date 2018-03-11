/**
 * object serialize
 */

// types map
const TYPES = [{}, [], 0, '', null, undefined, false].reduce((pre, next) => {
  const key = Object.prototype.toString.call(next);
  const type = key.split(' ')[1].slice(0, -1).toLowerCase();
  return {
    ...pre,
    [key]: type
  };
}, {});

// get type: ['object', 'array', 'string', 'number', 'boolean', 'null', 'undefined']
const theTypeOf = param => TYPES[Object.prototype.toString.call(param)];

/**
 * object serialize example:
 * serialize({
 *  key1: 'value1',
 *  key2: 'value2'
 * })   => key1=value1&key2=value2
 *
 * serialize({
 *  key1: 'value1',
 *  key2: 'value2'
 * }, keyOut)   => keyOut.key1=value1&keyOut.key2=value2
 *
 * serialize({
 *  key1: {
 *    keyIn1: 'valueIn1',
 *    keyIn2: 'valueIn2',
 *  },
 *  key2: 'value2'
 * })   => key1.keyIn1=valueIn1&key1.keyIn2=valueIn2&key2=value2
 *
 * serialize({
 *  key1: 'value1',
 *  key2: [1, 2],
 * })   => key1=value1&key2[0]=1&key2[1]=2
 *
 * serialize(value, key) => key=value
*/
const serialize = (param, key) => {
  const query = [];
  switch (theTypeOf(param)) {
    case 'object':
      Object.keys(param).forEach((item) => {
        query.push(serialize(param[item], `${key ? `${key}.` : ''}${item}`));
      });
      break;
    case 'array':
      query.push(param.map((item, idx) => `${key || item}[${idx}]=${item}`).join('&'));
      break;
    default:
      query.push(`${key || param}=${param}`);
  }
  return query.join('&');
};

export default serialize;
