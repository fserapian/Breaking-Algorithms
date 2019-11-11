
// return the median of an array, if even return the left side one
function absoluteValuesSumMinimization(arr) { 
	const isEven = arr.length % 2 === 0;

	// return isEven ? arr[arr.length / 2 - 1] : arr[(arr.length - 1) / 2];
	return isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
}

console.log(absoluteValuesSumMinimization([1, 3, 5]));
console.log(absoluteValuesSumMinimization([1, 3, 5, 8, 9, 10]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
console.log(absoluteValuesSumMinimization([2, 4, 7]));