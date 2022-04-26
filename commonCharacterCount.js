/*************** COMMON CHARCTER COUNT *****************/
/*
  Given two strings, find the number of common characters
  between them.
  Example:
  For s1 = 'aabcc', s2 = 'adcaa'
  commonCharacterCount(s1, s2) = 3.

  Strings have 3 common characters
  2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
  const strArr1 = s1.split('');
  const strArr2 = s2.split('');
  let count = 0;

  for (let i = 0; i < strArr1.length; i++) {
    for (let j = 0; j < strArr2.length; j++) {
      if (strArr1[i] === strArr2[j]) {
        count += 1;
        strArr2.splice(j, 1);
        break;
      }
    }
  }

  return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('abceeef', 'abceeee'));
