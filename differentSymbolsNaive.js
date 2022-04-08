/********* DIFFERENT SYMBOLS NAIVE ***********/
/*
  Given a string, find the number of different characters in it.

  Example:
  For s = 'cabca', differenctSymbolsNaive(s) = 3.

  There are 3 different characters: a, b and c.
*/

function differentSymbolsNaive(str) {
  const uniques = [];
  for (let i = 0; i < str.length; i++) {
    if (!uniques.includes(str[i])) {
      uniques.push(str[i]);
    }
  }
  return uniques.length;
}

function differentSymbolsNaive1(str) {
  const uniques = [];
  const chars = str.split('');
  chars.forEach((char) => {
    if (!uniques.includes(char)) {
      uniques.push(char);
    }
  });
  return uniques.length;
}

function differentSymbolsNaive2(str) {
  const uniques = new Set();
  const inputChars = str.split('');
  inputChars.forEach((char) => uniques.add(char));

  return uniques.size;
}

function differentSymbolsNaive3(str) {
  return str.split('').reduce((acc, char) => {
    return acc.includes(char) ? acc : [...acc, char];
  }, []).length;
}

// One line
const differentSymbolsNaive4 = (str) => str.split('').reduce((acc, c) => acc.includes(c) ? acc : [...acc, c], []).length;

console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive1('cabca'));
console.log(differentSymbolsNaive2('cabca'));
console.log(differentSymbolsNaive3('cabca'));
console.log(differentSymbolsNaive4('cabca'));
