/*********************** SUM OF TWO ************************/
/*
	You have two integer arrays, a and b, and an integer target value v.
	Determine wether there is a pair of numbers, where one number is taken
	from a and the other from b, that can be added together to get a sum of v.

	Return true if such a pair exists, otherwise return false.

	Example:
		For a = [1, 2, 3], b = [10, 20, 30, 40], v = 42
		sumOfTwo(a, b, v) = true.
 */

function sumOfTwo(a, b, v) {
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			if (a[i] + b[j] === v) {
				return true;
			}
		}
	}
	return false;
}

function sumOfTwo1(a, b, v) {
	const obj = {};

	for (let num of a) {
		const diff = v - num;
		obj[diff] = diff;
	}

	for (let num of b) {
		if (obj.hasOwnProperty(num)) {
			return true;
		}
	}
	return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 44));
console.log(sumOfTwo1([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo1([1, 2, 3], [10, 20, 30, 40], 44));
