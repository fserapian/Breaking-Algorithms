/* Given an array of 2k integers (for some integer k), perform the following operations
	until the array contains only one element:
* On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive
	elements with their sum.
* On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements
	with their product. After the algorithm has finished, there will be a single 
	element left in the array. Return that element.

Example:
For arr = [1, 2, 3, 4, 5, 6, 7, 8], arrayConversion(arr) = 186
We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186],
So the answer is 186

*/

function arrayConversion(arr) {
	let isOdd = true;
	while (arr.length !== 1) {
		arr = sumProduct(arr, isOdd);
		isOdd = !isOdd;
	}
	return arr[0];
}

function sumProduct(arr, isOdd) {
	const newArr = [];
	if (isOdd) {
		for (let i = 0; i < arr.length; i += 2) {
			newArr.push(arr[i] + arr[i + 1]);
		}
	} else {
		for (let i = 0 ; i < arr.length; i += 2) {
			newArr.push(arr[i] * arr[i + 1]);
		}
	}
	return newArr;
}

const arr = [1, 2, 3, 6];

console.log(arrayConversion(arr));












