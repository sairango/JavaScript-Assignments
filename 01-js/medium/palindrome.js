/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  function isPal(str, l, r) {
    if (l === r || l > r) {
      return true
    }

    return str[l].toLowerCase() === str[r].toLowerCase() && isPal(str, l + 1, r - 1);
  }

  const punct = ['/', '.', ',', '!', '?'];

  let sent = str.split(" ").join("");
  let final =""
  for (let i = 0; i < sent.length; i++){
    if (!punct.includes(sent[i])) {
      final += sent[i];
    }
  }

  return (isPal(final , 0 , final.length-1));
}
console.log(isPalindrome("Able, was I ere I saw Elba!"));
module.exports = isPalindrome;