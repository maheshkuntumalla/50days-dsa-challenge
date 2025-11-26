/* 
 ANAGRAM: is a ward or name formed by rearranging the letters of
 another such as cinema formed from iceman
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  freqLetters1 = {};
  freqLetters2 = {};

  //   for (let i = 0; i < str1.length; i++) {
  //     freqLetters1[str1[i]] = (freqLetters1[str1[i]] || 0) + 1;
  //   }

  //   for (let i = 0; i < str2.length; i++) {
  //     freqLetters2[str2[i]] = (freqLetters2[str2[i]] || 0) + 1;
  //   }

  for (let s of str1) {
    freqLetters1[s] = (freqLetters1[s] || 0) + 1;
  }

  for (let s of str2) {
    freqLetters2[s] = (freqLetters2[s] || 0) + 1;
  }

  console.log(freqLetters1, freqLetters2);

  for (let key in freqLetters1) {
    if (!(key in freqLetters2)) return false;
    if (freqLetters1[key] !== freqLetters2[key]) return false;
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));

function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookUp = {};

  for (let char of str1) {
    lookUp[char] ? (lookUp[char] += 1) : (lookUp[char] = 1);
  }

  console.log(lookUp);

  for (let char of str2) {
    if (!lookUp[char]) {
      return false;
    } else {
      lookUp[char] -= 1;
    }
  }
  return true;
}

console.log(validAnagram1("anagram", "nagaram"));
