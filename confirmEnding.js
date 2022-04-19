/********** CONFIRM ENDING ************/
/*
  Check if a string (first argument, str) ends with the given target string
  (second argument, ending).
  This challenge can be solved with the .endsWith() method, which was introduced
  in ES2015. But for the purpose of this challenge, we would like you to use one
  the javascript substring methods instead.

  Examples:
  confirmEnding('Abstraction', 'action') returns true.
  confirmEnding('Open sesame', 'pen') returns false.

*/

// Using substr method is deprecated
function confirmEnding(str, ending) {
  const reversedStr = str.split('').reverse().join('');
  const reversedEnding = ending.split('').reverse().join('');
  return reversedStr.substr(0, reversedEnding.length) === reversedEnding;
}

function confirmEnding1(str, ending) {
  return str.slice(str.length - ending.length) === ending;
}

// ES2015 Solution
function confirmEnding2(str, ending) {
  return str.endsWith(ending);
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding1('Abstraction', 'action'));
console.log(confirmEnding2('Abstraction', 'action'));
