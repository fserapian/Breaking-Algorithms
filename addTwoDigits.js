/*************** ADD TWO DIGITS ***************/
/*
  Add two digits of a number together.
    Ex: addTwoDigits(24) === 6
*/

function addTwoDigits(num) {
  const digits = num.toString().split('');
  return parseInt(digits[0]) + parseInt(digits[1]);
}

function addTwoDigits1(num) {
  const firstDigit = Math.floor(num / 10);
  const secondDigit = num % 10;
  return firstDigit + secondDigit;
}

const addTwoDigits2 = (num) =>
  num
    .toString()
    .split('')
    .reduce((total, digit) => total + +digit, 0);

console.log(addTwoDigits(58));
console.log(addTwoDigits1(58));
console.log(addTwoDigits2(58));
