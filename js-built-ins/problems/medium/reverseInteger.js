/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
  let negSign = false;
  let x = 0;
  let multiPlier = 1;

  if (num < 0) {
    negSign = true;
    num = -1 * num;
  }
  

  while (num > 0) {
    // console.log( `x ${x} +  (num % 10) ${num % 10}  * multiPlier ${multiPlier}`);
    // x = x + (num % 10) * multiPlier;
    x = x * 10 + (num % 10);
    num = Math.floor( num / 10);
    multiPlier *= 10;
  }
  if (negSign) {
    return -1 * x;
  }
  return x;
  
  
}
reverseInteger(4562432424)

module.exports = reverseInteger;
