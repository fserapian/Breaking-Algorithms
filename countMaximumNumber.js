/*********** COUNT MAX NUMBER ****************/
/*
	If arr = [1, 2, 8, 3, 4, 4, 8, 8];
	countMaximumNumber(arr) = 3

	Because 8 is the maximum number and the array
	contains 3 of it.
*/

function countMaximumNumber(arr) {
	const sorted = arr.sort((a, b) => a - b);
	const numToCheck = arr[arr.length - 1];

	let maxNumCount = 0;
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] === numToCheck) {
			maxNumCount++
		}
	}

	return maxNumCount;
}

function countMaximumNumber2(arr) {
	const maxNum = Math.max(...arr);

	let count = 0;
	arr.forEach(num => {
		if (num === maxNum) {
			count++;
		}
	});

	return count;

}

function countMaximumNumber3(arr) {
	const maxNum = Math.max(...arr);

	const maxNumArr = arr.filter(num => num === maxNum);

	return maxNumArr.length;
}


const arr = [1, 2, 8, 3, 4, 4, 8, 8, 8];

console.log(countMaximumNumber3(arr));














