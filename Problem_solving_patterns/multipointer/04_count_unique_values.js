/*
Implement a funtion called countUniqueValues which accepts a sorted array, and counts
the unique values in the array. there can be negative numbers in the array, but it will always be soreted
*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 3, 3, 4, 5, 6, 7, 8]));
