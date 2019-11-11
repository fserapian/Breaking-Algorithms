
// You are given an array of integers.
// On each move you are allowed to increase exactly
// one of its elements by 1.
// Find the minimal number of moves required
// to obtain a strictly increasing sequence
// from the input

// For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3

function arrayChange(arr) {

	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= arr[i + 1]) {
			arr[i + 1]++;
			count++;
		}
	}
}