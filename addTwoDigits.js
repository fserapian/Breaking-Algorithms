// add two digits of a number together
// ex: addTwoDigits(24) === 6

// const addTwoDigits = num => {
// 	const a = Math.floor(num / 10);
// 	const b = num % 10;
// 	return a + b;
// }

// function addTwoDigits(num) {
// 	return num.toString().split('')
// 				.reduce((total, digit) => total + parseInt(digit), 0);

// }

function addTwoDigits(num) {
	const digits = num.toString().split('');
	return parseInt(digits[0]) + parseInt(digits[1]);
}

console.log(addTwoDigits(58));