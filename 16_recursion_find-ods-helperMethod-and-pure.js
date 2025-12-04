//USING HELPER RECURSION

function findOdds(arr) {
  let oddArr = [];
  function helperFuntion(helperArr) {
    if (helperArr.length === 0) {
      return;
    }
    if (helperArr[0] % 2 !== 0) {
      oddArr.push(helperArr[0]);
    }
    helperFuntion(helperArr.splice(1));
  }

  helperFuntion(arr);
  return oddArr;
}

console.log(findOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function findOdds1(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(findOdds1(arr.splice(1)));
  return newArr;
}

console.log(findOdds1([1, 2, 3, 4, 5, 6, 7, 8, 9]));
