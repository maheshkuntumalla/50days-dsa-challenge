/*
Write a funtion called sumZer which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. Return an array
that includes both values that sum to zero or undefined if a pair does not exist.

[-3,-2,-1,0,1,2,3] // [-3,3]
[-2,0,1,3] //Undefined

*/

//Naive solution 0(n^2) time complexity 0(1) space complexity
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 4, 5, 6]));

//Optimized approach using multipointer method.

function sumZero1(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero1([-3, -2, -1, 0, 1, 4, 5, 6]));
