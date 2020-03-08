/***************** INTEGER TO STRING OF FIXED WIDTH *******************/
/*
 * Given a positive integer number and a certain length, we need to modify the given number
 * to have a specified length. We are allowed to do that either by cutting out leading digits
 * (if the number needs to be shortened) or by by adding 0s in front of the original number.
 *
 * Example:
 * For number = 1234 and width = 2, integerToStringOfFixedWidth(number, width) = '34'
 * For number = 1234 and width = 4, integerToStringOfFixedWidth(number, width) = '1234'
 * For number = 1234 and width = 5, integerToStringOfFixedWidth(number, width) = '01234'
 */

function integerToStringOfFixedWidth(number, width) {
		const numString = number.toString();
		const numberWidth = numString.length;

		const zerosToAdd = width - numberWidth;
		const diff = Math.abs(zerosToAdd);

		let resString = '';

		if (zerosToAdd > 0) {
				for (let i = 0; i < zerosToAdd; i++) {
						resString += '0';
				}
				for (let i = 0; i < numberWidth; i++) {
						resString += numString[i];
				}
		} else {
				for (let i = diff; i < numberWidth; i++) {
						resString += numString[i];
				}
		}

		return resString;
}


const number1 = 1234;
const width1 = 2;
console.log(integerToStringOfFixedWidth(number1, width1));

const number2 = 1234;
const width2 = 4;
console.log(integerToStringOfFixedWidth(number2, width2));

const number = 1234;
const width = 5;
console.log(integerToStringOfFixedWidth(number, width));


