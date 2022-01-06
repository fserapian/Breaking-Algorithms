/************************* MISSING LETTERS ****************************/
/*
  Find the missing letter in the passed letter range and return it.

  If all letters are present in the range, return undefinced.
  
  Example:
    - missingLetters('abce') should return 'd'.
    - missingLetters('abcdefghjklmno') should return 'i'.
    - missingLetters('abcdefghijklmnopqrstuvwxyz') should return undefined.	
 */

function missingLetters(str) {
  const numArr = str.split('').map(char => char.charCodeAt(0));

  if (str[0] !== 'a') {
    return 'a';
  }

  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] - numArr[i - 1] !== 1) {
      return String.fromCharCode(numArr[i - 1] + 1);
    }
  }

  return null;
}

function missingLetterInAlphabet(str) {
  if (str[0] !== 'a') {
    return 'a';
  }

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  return null;
}

function missingLetters1(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }

  return null;
}

console.log(missingLetters1('abce'));
console.log(missingLetters('abce'));
console.log(missingLetterInAlphabet('abce'));
