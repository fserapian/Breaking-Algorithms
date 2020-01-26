/************** EXTRACT EACH Kth *************/
/*
	Given an array of integers, remove every kth element from it.
	
	Ex: For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3.

	extractEachKth(inputArray) = [1, 2, 4, 5, 7, 8, 10]

*/

function extractEachKth(inputArr, k) {
	let step = k;
	return inputArr.filter((num, i) => {
		if (i !== step - 1) {
			return num;
		}
		step = step + k;
	});
}

function extractEachKth2(arr, k) {
	const newArr = arr;
	let step = k;

	for (let i = 0; i < newArr.length; i++) {
		if (i === step - 1) {
			newArr.splice(i, 1);

			step += k - 1;
		}
	}
	return newArr;
}

function extractEachKth3(arr, k) {
	return arr.filter((num, i) => (i + 1) % k !== 0);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;

// console.log(extractEachKth(inputArray, k));
// console.log(extractEachKth2(inputArray, k));
console.log(extractEachKth3(inputArray, k));

