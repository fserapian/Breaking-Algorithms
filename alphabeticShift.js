/*********************** ALPHABETIC SHIFT ***********************/
/*
  Shift each letter in string by one letter.
  If there is empty string return empty string.
  When Z return A.
  When z return a.

  Ex: abcdzAZH => bcdeaBAI
*/

function alphabeticShift(str) {
  return str
    .split('')
    .filter((letter) => letter === ' ' || (letter >= 'A' && letter <= 'z'))
    .map((letter) => {
      if (letter === ' ') {
        return ' ';
      }

      if (letter === 'z') {
        return 'a'.charCodeAt(0);
      }

      if (letter === 'Z') {
        return 'A'.charCodeAt(0);
      }

      return letter.charCodeAt(0) + 1;
    })
    .map((code) => String.fromCharCode(code))
    .join('');
}

function alphabeticShift1(inputString) {
    if (!inputString) {
        return "";
    }

    let shiftedString = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);

        if (char.match(/[a-z]/i)) {
            if (char === 'z') {
                shiftedString += 'a';
            } else if (char === 'Z') {
                shiftedString += 'A';
            } else {
                const shiftedChar = String.fromCharCode(char.charCodeAt(0) + 1);
                shiftedString += shiftedChar;
            }
        } else {
            shiftedString += char;
        }
    }

    return shiftedString;
}

console.log(alphabeticShift('abcdzAZH'));
console.log(alphabeticShift1('abcdzAZH'));
