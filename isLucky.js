/******************** IS LUCKY ************************/
/*
	Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky
	if the sum of the fist half of the digits is equal to the sum of the second half.

	Given a ticket number n, determine if it is lucky or not.

	Example:
	For n = 1230, the output should be isLucky(n) = true;
	For n = 239017, the output should be isLucky(n) = false;
*/

function isLucky(n) {
	let firstHalfSum = 0,
		secondHalfSum = 0;

	const numString = n.toString();	

	for (let i = 0; i < numString.length / 2; i++) {
		firstHalfSum += parseInt(numString[i]);
	}

	for (let i = numString.length / 2; i < numString.length; i++) {
		secondHalfSum += parseInt(numString[i]);
	}

	return firstHalfSum === secondHalfSum;
}

function isLucky1(n) {
	let firstHalfSum = 0,
		secondHalfSum = 0;

	const numArr = n.toString().split('');

	numArr.forEach((num, i) => {
		if (i < numArr.length / 2) {
			firstHalfSum += +num; // similar to parseInt(num)
		} else {
			secondHalfSum += +num;
		}
	})

	return firstHalfSum === secondHalfSum;
}

function isLucky2(n) {
	const luckyNum = n.toString();

	const half = luckyNum.length / 2;

	const firstHalf = luckyNum.substring(0, half);
	const secondHalf = luckyNum.substring(half);

	const firstHalfSum = firstHalf.split('').reduce((acc, elem) => acc + parseInt(elem), 0);
	const secondHalfSum = secondHalf.split('').reduce((acc, elem) => acc + parseInt(elem), 0);

	return firstHalfSum === secondHalfSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
console.log(isLucky1(1230));
console.log(isLucky1(239017));
console.log(isLucky2(1230));
console.log(isLucky2(239017));






