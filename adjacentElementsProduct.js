// find the larget product of adjacent elements
// [3, 6, -2, -5, 7, 3] ===> 21

// function adjacentElementsProduct(arr) {

// 	let max = arr[0] * arr[1];

// 	for (let i = 1; i < arr.length - 1; i++) {
// 		if (arr[i] * arr[i + 1] > max) {
// 			max = arr[i] * arr[i + 1];
// 		}
// 	}
// 	return max;
// }

function adjacentElementsProduct(arr) {
	let largestProd = arr[0] * arr[1];
	for (let i = 1; i < arr.length - 1; i++) {
		product = arr[i] * arr[i + 1];
		largestProd = product > largestProd ? product : largestProd;
	}
	return largestProd;
}

console.log(adjacentElementsProduct([9, 5, -6, -6, 1, 35]));