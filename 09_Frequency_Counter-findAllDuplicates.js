/*
Frequency Counter - findAllDuplicates

Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
*/

function findAllDuplicates(arr1) {
  if (arr1.length === 0) return [];

  let lookUp = {};
  let duplicatesArr = [];

  for (let ele of arr1) {
    if (!lookUp[ele]) {
      lookUp[ele] = 1;
    } else {
      duplicatesArr.push(ele);
    }
  }
  return duplicatesArr;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
