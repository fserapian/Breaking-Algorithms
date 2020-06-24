/******************** ARRAY CHANGE **********************/

/*  You are given an array of integers.
	On each move you are allowed to increase exactly
	one of its elements by 1.
	Find the minimal number of moves required
	to obtain a strictly increasing sequence
	from the input

	Example:
	For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3.
 */

function arrayChange0(arr) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] >= arr[j + 1]) {
				arr[j + 1]++;
				count++;
			}
		}	
	}

	return count;
}

// Better solution
function arrayChange(arr) {
	const resArr = [];
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		resArr.push(i + 1);
	}

	for (let i = 0; i < arr.length; i++) {
		count += (resArr[i] - arr[i]);
	}

	return count;
}

function arrayChange1(arr) { // ?
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= arr[i + 1]) {
			const diff = (arr[i] + 1) - arr[i + 1];
			arr[i + 1] = arr[i] + 1;
			count += diff;
		}
	}

	return count;
}

console.log(arrayChange([1, 0, 1, 2, 1]));
console.log(arrayChange([1, 1, 1]));
console.log(arrayChange0([1, 0, 1, 2, 1]));
console.log(arrayChange0([1, 1, 1]));
console.log(arrayChange1([1, 0, 1, 2, 1]));
console.log(arrayChange1([1, 1, 1]));

// 1, 1, 2, 3, 2 => 4
// 1, 2, 3, 4, 3 => 4 + 4 = 8
// 1, 2, 3, 4, 4 => 8 + 1 = 9
// 1, 2, 3, 4, 5 => 9 + 1 = 10.

// 1, 2, 3, 4, 5 => 2 + 2 + 2 + 4 = 10.
