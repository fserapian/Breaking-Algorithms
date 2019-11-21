/*
Write a function that splits an array (first argument) into groupts of length 
of size (second argument) and returns them into two-dimensional array.
Ex: chunkyMonkey(['a', 'b', 'c', 'd'], 2) returns [['a', 'b'], ['c', 'd']].
	chunkyMonkey([0, 1, 2, 3, 4, 5], 4) returns [[0, 1, 2, 3], [4, 5]].
*/

function chunkyMonkey(arr, n) {
	const chunked = [];
	for (let i = 0; i < arr.length; i += n) {
		chunked.push(arr.slice(i, i + n));
	}
	return chunked;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd', 'e'], 3));
console.log(chunkyMonkey([1, 3, 5, 7], 2));