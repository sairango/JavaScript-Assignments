/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/
// - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
// - Output: ["apple2", "banana3", "cherry", "apple2"]

function compressWords(arr) {
  const ans = [];
  let n = arr.length;
  if (n === 0) {
    return [];
  }
  for (let i = 0; i < n; i++){
    let curr = arr[i];
    let currlen = 1;

    while (i + 1 < n && arr[i + 1] === curr) {
      currlen++;
      i++;
    }

    if (currlen > 1) {
      ans.push(curr + currlen);
    } else {
      ans.push(curr);
    }
  }
  return ans;
}


module.exports = compressWords;
