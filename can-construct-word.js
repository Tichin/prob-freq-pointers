"use strict";
/** Takes 2 strings of lowercase letters, a word, and letters.
 * If the word can be built from the letters, return true.
 * Otherwise, return false.
 * Ex. "cat" "abct" // true
 * Ex. "cat" "abc" //false
*/

//  build freq counter for letters, another one for word
function canConstructWord(word, letters) {
  let freqCounter = {};

  // check if word is longer than letters return false
  if (word.length > letters.length) { return false; }
  // build freq counter for letters
//TODO make into own function
  for (let letter of letters) {

    freqCounter[letter] = (freqCounter[letter] || 0) + 1;
  }

  // loop through the word:
  // if char is not in freq counter or freq == 0 : return => false
  // if it is in that freq counter => freq --
  // when we finished the loop, return true

  for (let char of word) {

    if (!(char in freqCounter) || freqCounter[char] === 0) { return false; }

    freqCounter[char]--;
  }

  return true;
}
