/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length===0) {
    return undefined;
  }
  let lrg = -Infinity;

  for (ele in numbers) {
    if (numbers[ele] > lrg) {
      lrg = numbers[ele];
    }
  }

  return lrg;
}
console.log(findLargestElement([3, 7, 2, 9, 1]));
module.exports = findLargestElement;