// get true if sequence is almost increasing
// meaning that we can remove one element to get an increasing sequence
// [1, 3, 2] === true    // we can remove 3 to get an increasing sequence
// [1, 3, 2, 1] === false  // we can't get a sequence by removing a number

function almostIncreasingSequence(arr) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= arr[i - 1]) {
			count++;
		}
		if (arr[i] <= arr[i - 2] && arr[i + 1] <= arr[i - 1]) {
			return false;
		}
	}

	return count <= 1;
}

console.log(almostIncreasingSequence([1, 2, 3, 5, 4]));