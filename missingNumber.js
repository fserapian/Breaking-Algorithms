/************* MISSING NUMBER ************/
/*
	Ex: if we have and array arr = [1, 8, 6, 4, 5, 2, 7];
	missingNumber(arr) = 3;
*/


function missingNumber(arr) {
	let sorted = arr.sort((a, b) => a - b);

	for (let i = 0; i < sorted.length - 1; i++) {
		if (arr[i] !== arr[i + 1] - 1) {
			return arr[i] + 1;
		}
	}

	return 'No missing number';

}

const arr = [1, 5, 4, 3, 2, 7];
console.log(missingNumber(arr));