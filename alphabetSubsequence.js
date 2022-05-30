/************** ALPHABET SUBSEQUENCE **************/
/*
  return true if str is an alphabet sequence
  Ex: 'acf' === true
  Ex: 'accfg' === false
  Ex: 'cdai' === false
*/

function alphabetSubsequence(str) {
  const codeArr = str.split('').map((letter) => letter.charCodeAt(0));

  for (let i = 0; i < codeArr.length - 1; i++) {
    if (codeArr[i + 1] <= codeArr[i]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence('acf'));
console.log(alphabetSubsequence('accfg'));
console.log(alphabetSubsequence('cdai'));
console.log(alphabetSubsequence('abczza'));
