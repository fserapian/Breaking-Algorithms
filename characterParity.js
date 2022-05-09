/*************************** CHARACTER PARITY *****************************/
/*
  Given a character, check if it represents an odd digit,
  and even digit or not a digit at all.
  Ex: For symbol = '5', characterParity(symbol) = 'odd'.
    For symbol = '8', characterParity(symbol) = 'even'.
    For symbol = 'q', characterParity(symbol) = 'not a digit'.
*/

function characterParity(symbol) {
  const num = parseInt(symbol);

  if (isNaN(num)) {
    return 'not a digit';
  }

  if (num % 2 === 0) {
    return 'even';
  }

  return 'odd';
}

// Shorter code
function characterParity1(symbol) {
  const num = Number(symbol);
  return isNaN(num) ? 'not a digit' : num % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
console.log(characterParity1('5'));
console.log(characterParity1('8'));
console.log(characterParity1('q'));
