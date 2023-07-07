"use strict";
/** two input arrays, using the values of the first array as keys,
 * and the values of the second array as values and make an object.
 * Then return the object.
 * If there are more keys than values, value should be null.
 * If there are more values than keys,value should be ignored
*/


function twoArrayObject(keys, values) {

  let obj = {};

  for (let i = 0; i < keys.length; i++) {

    obj[keys[i]] = values[i] ? values[i] : null;

  }

  return obj;
}
