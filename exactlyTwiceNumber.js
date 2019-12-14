/****** EXACTLY TWICE EXISTED NUMBERS NUMBER *******/
// Examples:
// 3, 2, 5, 3, 5, 1, 8 => returns 2
// 4, 4, 4, 5, 8, 1 => returns 0

function exactlyTwiceNumber(list) {
	const newArr = [];
	for (let i = 0; i < list.length; i++) {
		let count = 0;
		for (let j = 0; j < list.length; j++) {
			if (list[i] === list[j] && i !== j && !newArr.includes(list[i])) {
				count++;
			}
		}
		if (count === 1) {
			newArr.push(list[i]);
		}
	}
	return newArr.length;
}

console.log(exactlyTwiceNumber([3, 2, 5, 3, 5, 1, 8]));