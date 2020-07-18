/********************* SORT BY LENGTH *********************/
/*
	Given an array of strings, sort them in the order of increasing
	lengths.
	If two strings have the same length, their relative order must be
	the same as in the initial array.

	Example:
		inputArray = ['abc', '', 'aaa', 'a', 'zz']

	sortByLength(inputArray) = ['', 'a', 'zz', 'abc', 'aaa']
 */

function sortByLength(inputArray) {
	return inputArray.sort((a, b) => a.length - b.length);
}

// One liner
const sbl = a => a.sort((x, y) => x.length - y.length);

console.log(sortByLength(['abc', '', 'aaa', 'a', 'zz']));
console.log(sbl(['abc', '', 'aaa', 'a', 'zz']));
