/*

Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

*/

//Using Frequency counter

function areThereDuplicates(...args) {
  let freqCounter = {};
  for (let ele of args) {
    if (!freqCounter[ele]) {
      freqCounter[ele] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true

// using multi pointer technique

function areThereDuplicates1(...args) {
  args.sort();
  let i = 0;
  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    }
    i++;
  }
  return false;
}

console.log(areThereDuplicates1(1, 2, 3)); // false
console.log(areThereDuplicates1(1, 2, 2)); // true

/*
Time complexity:
-Sorting the array of length nn takes O(nlog⁡n)O(nlogn).
-The single while loop is linear O(n)O(n).
-Combined: O(nlog⁡n+n)=O(nlog⁡n)O(nlogn+n)=O(nlogn).

Space complexity (extra space):
-Aside from the args array (which just holds the inputs) and a few scalar variables (i, j), no extra data structures are created.
-Conceptually this is O(1)O(1) additional space; in practice the sort uses at most O(log⁡n)O(logn) stack/buffer space, which is still very small compared to nn.
*/
