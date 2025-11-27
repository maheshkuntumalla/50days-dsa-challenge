/*
Write a funtion called maxSubarraySum which accepts an array of intergers and a number called n.
the funtion should calculate the maximum sum of n consecutive elements in the array

ex:- ([1,2,5,2,8,1,5], 2) ans 10
     ([4,2,1,6],1) ans 6
*/

//---------------------------------Naive solution-------------------------------------
function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3));

//------------------------------Optimized solution------------------------------------

function maxSubarraySum1(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 1));
