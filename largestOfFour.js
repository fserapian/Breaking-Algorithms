/******************** LARGEST OF FOUR ***********************/
/*
	Return an array consisting of the largest number from each provided sub-array.
	For simplicity, the provided array will contain exactly 4 sub-arrays.

	Remember, you can iterate through an array with a simple for loop,
	and access each member with array syntax arr[i].

	Example:
	largestOfFour([[1, 3, 4, 10, 5], [18, 49, 4], [11, 5], [2, 7]])
	returns [10, 49, 11, 7]
 */

// If we have four arrays as args
function largestOfFour(arr1, arr2, arr3, arr4) {
	const largest1 = arr1.sort((a, b) => b - a)[0];
	const largest2 = arr2.sort((a, b) => b - a)[0];
	const largest3 = arr3.sort((a, b) => b - a)[0];
	const largest4 = arr4.sort((a, b) => b - a)[0];

	return [largest1, largest2, largest3, largest4];
}

// Real Answer
function largestOfFour1(arr) {
	largestArr = [];
	for (let i = 0; i < arr.length; i++) {
		largestArr.push(arr[i].sort((a, b) => b - a)[0]);
	}

	return largestArr;
}

console.log(largestOfFour([1, 3, 4, 10, 5], [18, 49, 4], [11, 5], [2, 7]));
console.log(largestOfFour1([[1, 3, 4, 10, 5], [18, 49, 4], [11, 5], [2, 7]]));

