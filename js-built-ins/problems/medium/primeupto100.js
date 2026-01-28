/*
  Write a function `getPrimesUpTo100` which returns an array of all prime numbers up to 100.

  What is a prime number?
  - A prime number is a number greater than 1 that has no divisors other than 1 and itself.

  Example:
  - Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

  - Input: There is no input, the function returns an array of primes.

  - Input: N/A

  Once you've implemented the logic, test your code by running
  - `npm run test-prime`
*/

function getPrimesUpTo100() {

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }

    if (num % 2 == 0 ) {
      return false;
    }

    for (let i = 3; i * i <= num; i+=2){
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }

  const ans = [];
  for (let i = 1; i <= 100; i++){
    if (isPrime(i)) {
      ans.push(i);
    }
  }

  return ans;
}
const primes = getPrimesUpTo100();
console.log(primes);

module.exports = { getPrimesUpTo100 };
