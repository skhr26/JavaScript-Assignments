/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let maxi=numbers[0];
  for(let value of numbers) {
    maxi=Math.max(maxi,value);
  }
  return maxi;

}

module.exports = findLargestElement;