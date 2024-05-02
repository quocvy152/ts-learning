/**
 * Input: arr[] = {1, 2, 4, 6, 3, 7, 8} , N = 8
 * Output: 5
 * Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5
 */

const findMissingNumber = (array) => {
  let arrTemp = [];
  let missingNumber = null;

  for (let i = 0; i < array.length; i++) {
    arrTemp[array[i] - 1] = array[i];
  }

  for (let j = 0; j < arrTemp.length; j++) {
    if (!arrTemp[j]) {
      missingNumber = j + 1;
    }
  }

  return missingNumber;
};

console.log({
  NO_MISSING: findMissingNumber([1, 2, 3, 5, 4, 7, 8, 6]), // no missing
  MISSING: findMissingNumber([1, 2, 3, 5, 4, 7, 8, 9]),
});
