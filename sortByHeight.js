/****************** SORT BY HEIGHT **********************/
/*
	Some people are standing in a row in a park.
	There are trees between them which cannot be moved.
	Your task is to rearrange the people by their heights
	in a non-descending order with moving the trees.

	Example:
		For a = [-1, 150, 190, 170, -1, -1, 160, 180],
		sortByHeight(a) = [-1, 150, 160, 170, -1,  -1, 180, 190]
 */

function sortByHeight(a) {
	const indexes = [];
	const filtered = a.filter((num, i) => {
		if (num === -1) {
			indexes.push(i);
		} else {
			return num;
		}
	});

	const sorted = filtered.sort((a, b) => a - b);

	for (let i = 0; i < indexes.length; i++) {
		sorted.splice(indexes[i], 0, -1);
	}
	return sorted;
}

function sortByHeight1(a) {
	const filtered = a.filter(num => num !== -1)
		.sort((a, b) => a - b);

	let index = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== -1) {
			a[i] = filtered[index];
			index++;
		}
	}
	return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(sortByHeight1([-1, 150, 190, 170, -1, -1, 160, 180]));
