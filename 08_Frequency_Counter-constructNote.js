/*
Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/

function constructNote(msg, letters) {
  console.log(msg, letters);
  let freqCounter = {};

  for (let letter of letters) {
    freqCounter[letter] = (freqCounter[letter] || 0) + 1;
  }

  for (let letter of msg) {
    if (!freqCounter[letter]) {
      return false;
    } else {
      freqCounter[letter] -= 1;
    }
  }
  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
