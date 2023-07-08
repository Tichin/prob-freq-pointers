"use strict";
// add whatever parameters you deem necessary & write docstring
/**We're given two integers.  Determine whether they have the same frequency of digits.
 * For instance 123, 321 //true
*/
function sameFrequency(num1, num2) {
  //make both numbers into strings
  //make freq counter for both strings
  //loop through keys of first freq counter, and compare their values with keys from second counter.

  let str1 = num1.toString();
  let str2 = num2.toString();
  let counter1 = freqCounter(str1);
  let counter2 = freqCounter(str2);

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;

}

function freqCounter(string) {
  let counter = {};
  for (let char of string) {
    counter[char] = (counter[char] || 0) + 1;
  }
  return counter;
}