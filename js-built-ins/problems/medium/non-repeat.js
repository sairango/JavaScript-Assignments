/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
  // Your code here
  const freq = {};
  const arr = str.split("");
  // console.log(arr);
  arr.forEach(element => {
    if (freq[element]) {
      freq[element]++;
    } else {
      freq[element] = 1;
    }
  });

  for (const key in freq) { 
  if (freq[key] === 1) {
    return key;
  }
}

  return null;
}
// console.log("abcab")
module.exports = nonrepeat;
