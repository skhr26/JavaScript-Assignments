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
  // Your code here
  let sign=true;
  if(num<0) sign=false;
  let beta=Math.abs(num);
  let rev=0;
  while(beta>0) {
    let ld=beta%10;
    rev=rev*10+ld;
    beta=Math.floor(beta/10);
  }
  return (sign)?rev:-1*rev;
}

module.exports = reverseInteger;
