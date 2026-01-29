/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let cnt = 0;
  for (let i = 0; i < str.length; i++){
    // console.log(str[i].toLowerCase());
    if (vowels.includes(str[i].toLowerCase())) {
      cnt++;
    }
  }
  return cnt;
}
console.log(countVowels('HEllo'))
module.exports = countVowels;