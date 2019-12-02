/************ CONTAINS CLOSE NUMBERS *************/
/*
	Given an array of integers nums and an integer k, determine wether
	there are two distinct indeces i and j in the array where nums[i] = nums[j]
	and the absolute difference between i and j is less than or equal to k.

	Example:
	For nums = [0, 1, 2, 3, 5, 2], k = 3, containsCloseNums(nums, k) = true
	There are two 2s in nums, and the absolute difference between their positions
	is exactly 3.

	For nums = [0, 1, 2, 3, 5, 2], k = 2, containsCloseNums(nums, k) = false
	The absolute difference between the positions ot the two 2s is 3,
	which is more than k.
*/

function containsCloseNums(nums, k) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				if (Math.abs(i - j) <= k) {
					return true;
				}
			}
		}
	}
	return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));