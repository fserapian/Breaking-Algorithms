/********************* CHECK PALINDROME **************************/
/*
  Given a string, check if it is a palindrome.
  Ex:
  inputString = 'aabaa', checkPalindrome(inputString) = true.
  inputString = 'abac', checkPalindrome(inputString) = false.
  inputString = 'a', checkPalindrome(inputString) = true.
*/

function checkPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length / 2; i++) {
    if (lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Another Solution
function checkPalindrome1(str) {
  const lowerCaseString = str.toLowerCase();
  return lowerCaseString === lowerCaseString.split('').reverse().join('');
}

console.log(checkPalindrome('Abba'));
console.log(checkPalindrome1('Abba'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome1('abac'));
