"use strict";

/**Takes sorted array of nums.  Takes a target average.
 * Returns true if any pair of the array has the target average for its average.
 * Otherwise, return false.
 * Ex. [1,2,3], 2.5 // true
 * Could be empty array, in which case it should return false.
*/

function averagePair(sortedNums, targetAvg) {

  //make indexes for first and last nums in array.

  //while loop last target > first target
  //if they're equal, return true
  //if avg of indices is less than target, last target--
  //if avg of indices is more than target, first target++

  let firstIndex = 0;
  let lastIndex = sortedNums.length -1;
  let avg = 0;
  if (sortedNums.length === 0) {
    return false;
  }
  while (lastIndex > firstIndex) {
    avg = (sortedNums[firstIndex] + sortedNums[lastIndex]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      firstIndex++;
    } else if (avg > targetAvg) {
      lastIndex--;
    }

  }
  return false;

}

