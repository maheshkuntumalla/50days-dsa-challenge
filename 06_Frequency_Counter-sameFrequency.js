/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);

  console.log(str1);
  console.log(str2);

  if (str1.length !== str2.length) {
    return false;
  }

  let lookUp = {};

  for (let ele of str1) {
    lookUp[ele] = (lookUp[ele] || 0) + 1;
  }

  console.log(lookUp);

  for (let ele of str2) {
    if (!lookUp[ele]) {
      return false;
    } else {
      lookUp[ele] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
