/****************** HOUSE NUMBERS SUM **********************/
/*
	A boy is walking a long way from school to his home. To make the walk
	more fun he decides to add up all the numbers of the house that he passes by
	during his walk. Unfortunatley, not all of the houses have numbers written 
	on them, and on top of that the boy is regularely taking turns to change 
	streets, so the numbers don't appear to him in any particular order.

	At some point during the walk the boy encounters a house with number 0
	written on it, which surprises him so much that he stops adding numbers
	to his total right after seeing that house.

	For the given sequence of the houses determine the sum that the boy will get.
	It is guaranteed that there will always be at least one 0 house on the path.
	
	Example:
	For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2],
	houseNumbersSum(inputArray) = 11.

	The answer was obtained as 5 + 1 + 2 + 3 = 11.
*/

function houseNumbersSum(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === 0) {
			break;
		}
		sum += numbers[i]
	}
	return sum;
}

function houseNumbersSum1(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === 0) {
			return sum;
		}
		sum += numbers[i];
	}
}

const numbers = [5, 1, 2, 3, 0, 1, 5, 0, 2];
console.log(houseNumbersSum(numbers));
console.log(houseNumbersSum1(numbers));