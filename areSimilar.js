// Worth to think about it


// Two arrays are similar if we can swap one pair AT MOST in first array to obtain same
// values in second array
// [1, 3, 4] === [3, 1, 4]
// [1, 1, 2] !== [1, 2, 2]

// function areSimilar(arr1, arr2) {
// 	const sorted1 = arr1.sort((a, b) => a - b);
// 	const sorted2 = arr2.sort((a, b) => a - b);

// 	for (let i = 0; i < sorted1.length; i++) {
// 		if (sorted1[i] !== sorted2[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// const arr1 = [1, 5, 8, 3, 7];
// const arr2 = [1, 8, 5, 7, 3];


// console.log(areSimilar(arr1, arr2));

function areSimilar(arr1, arr2) {

	const c = [];
	const d = [];

	if (arr1.toString() === arr2.toString()) {
		return true;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			c.push(arr1[i]);
			d.push(arr2[i]);
		}
	}

	if (c.length === 2 && c.toString() === d.reverse().toString()) {
		return true;
	}

	return false;

}

const arr1 = [1, 5, 8, 3, 7];
const arr2 = [7, 5, 8, 3, 1];


console.log(areSimilar(arr1, arr2));




















