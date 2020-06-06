/*************************** LONGEST DIGITS PREFIX ******************************/
/*
	Given a string, output its longest prefix which contains only digits.

	Example:
	For inputString = '123aa1',
	the output should be longestDigitsPrefix(inputString) = '123'
 */

function longestDigitsPrefix(inputString) {
	decimals = '123456789';
	let res = '';
	for (let i = 0; i < inputString.length; i++) {
		if (decimals.includes(inputString[i])) {
			res += inputString[i];
		} else {
			break;
		}
	}
	return res;
}

function longestDigitsPrefix1(inputString) {
	let res = '';
	for (let i = 0; i < inputString.length; i++) {

		if (!parseInt(inputString[i])) { 
			break;
		}

		res += inputString[i];
	}
	return res;
}

function longestDigitsPrefix2(inputString) {
	let res = '';
	for (let char of inputString) {
		if (isNaN(parseInt(char))) {
			break;
		}
		res += char;
	}
	return res;
}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix1('123aa1'));
console.log(longestDigitsPrefix2('123aa1'));
