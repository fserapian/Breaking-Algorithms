/*********************** SEEK AND DESTROY *************************/
/*
	You will be provided with an initial array (the first argument 
	in the destoyer function), followed by one or more arguments.

	Remove all elements from the initial array that are of the same value
	as these arguments.

	Example:
	- seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]) sould return [1]
	- seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]) sould return [1, 5, 1]
 */

function seekAndDestroy(arr1, arr2) {
	return arr1.filter(elem => {
		if (!arr2.includes(elem)) {
			return elem;
		}
	});
}

// One liner
const seekAndDestroy1 = (arr1, arr2) => arr1.filter(elem => !arr2.includes(elem));

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
console.log(seekAndDestroy1([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy1([1, 2, 3, 5, 1, 2, 3], [2, 3]));
