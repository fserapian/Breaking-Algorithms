/*
Given an array of integers, find the maximal possible sum
of its k consecutive elements
Example: arr = [1, 3, 5, 2], k = 2

* 1 + 3 = 4
* 3 + 5 = 8
* 5 + 2 = 7

Thus, the answer is 8
*/

function arrayMaxConsecutiveSum(arr, k) {
	const sums = [];

	for (let i = 0; i < arr.length - k + 1; i++) {
		let sum = 0;
		for (let j = i; j < k + i; j++) {
			sum += arr[j];
		}
		sums.push(sum);
	}

	let max = sums[0];
	sums.forEach(sum => max = sum > max ? sum : max);

	return max;
}

console.log(arrayMaxConsecutiveSum([1, 3, 5, 2], 2));
























