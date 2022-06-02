/********************** ALL LONGEST STRINGS **********************/
/*
  Return all longest strings in an array
  ['abcd', 'fhsj', 'dh'] === ['abcd', 'fhsj']
*/

function allLongestStrings(arr) {
  arr.sort((a, b) => b.length - a.length);
  const longestSize = arr[0].length;
  return arr.filter((element) => element.length === longestSize);
}

function allLongestStrings1(arr) {
  let longest = 0;
  const newArr = [];
  arr.forEach((str) => (longest = str.length > longest ? str.length : longest));
  arr.forEach((str) => (str.length === longest && newArr.push(str)));
  return newArr;
}

console.log(
  allLongestStrings(['bdsg', 'adsg', 'iuy', 'fhdsfs', 'fdh', 'rueysg'])
);

console.log(
  allLongestStrings1(['bdsg', 'adsg', 'iuy', 'fhdsfs', 'fdh', 'rueysg'])
);
