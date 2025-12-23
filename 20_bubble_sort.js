function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([6, 3, 2, 7, 9, 1]));

// optimized version for nearly sorted arrays

function optimizedBubbleSort(arr) {
  let noSwap;
  for (let i = 0; i < arr.length - 1; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    console.log("hi");
    if (noSwap) break;
  }
  return arr;
}

console.log(optimizedBubbleSort([9, 3, 4, 5, 6]));
