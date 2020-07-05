/********************* FIND ODD ***********************/
/*
	find the number in an array that occurs an odd number of times

	Example:
		array = [6, 6, 6, 1, 2, 2, 1, 3, 3, 3, 3]
	findOdd(array) = 6
 */

function findOdd(array) {
	const obj = {};
	for (let i = 0; i < array.length; i++) {
		const number = array[i];
		if (!obj[number]) {
			obj[number] = 1
		} else {
			obj[number]++;
		}
	}

	for (const key in obj) {
		if (obj[key] % 2 !== 0) {
			return +key;
		}
	}
}

function findOdd1(array) {
	const counts = array.reduce((obj, num) => {
		if (!obj[num]) { // !obj[num] ? obj[num] = 1 : obj[num]++;
			obj[num] = 1;
		} else {
			obj[num]++;
		}
		return obj;
	}, {});

	for (const key in counts) {
		if (counts[key] % 2 !== 0) { // If odd
			return +key;
		}
	}
}

function findOdd2(array) {
	const counts = array.reduce((obj, num) => {
		obj[num] = obj[num] || 0;
		obj[num]++;
		return obj;
	}, {});

	for (const key in counts) {
		if (counts[key] % 2 !== 0) { // If odd
			return +key;
		}
	}
}

console.log(findOdd([6, 6, 6, 1, 2, 2, 1, 3, 3, 3, 3]));
console.log(findOdd2([6, 6, 6, 1, 2, 2, 1, 3, 3, 3, 3]));
