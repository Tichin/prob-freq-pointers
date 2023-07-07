// add whatever parameters you deem necessary & write doc comment
// input  2 strings word letter,
// true if word can be build by the letters,otherwise false
// only lowercase letters
// O(w+k)//O(n)
// letters 'abc' word 'ba' true
// letters 'abc' word 'aa' false

//  build freq counter for letters, another one for word
function canConstructWord(word, letters) {
  let freqCounter = {};

  // check if word is longer than letters return false
  if (word.length > letters.length) { return false; }
  // build freq counter for letters

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
