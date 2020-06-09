/************************* MISSING LETTERS ****************************/
/*
	Find the missing letter in the passed letter range and return it.

	If all letters are present in the range, return undefinced.
	
	Example:
		- missingLetters('abce') should return 'd'.
		- missingLetters('abcdefghjklmno') should return 'i'.
		- missingLetters('abcdefghijklmnopqrstuvwxyz') should return undefined.	
 */

function missingLetters(str) {
	const numArr = str.split('').map(char => char.charCodeAt(0));

	if (str[0] !== 'a') {
		return 'a';
	}

	for (let i = 1; i < numArr.length; i++) {
		if (numArr[i] - numArr[i - 1] !== 1) {
			return String.fromCharCode(numArr[i - 1] + 1);
		}
	}

	return undefined;
}


function missingLetters1(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== alphabet[i]) {
			return alphabet[i];
		}
	}

	return undefined;
}

console.log(missingLetters1('bcdf'));
console.log(missingLetters1('abcdefghjklmno'));
console.log(missingLetters1('abcdefghijklmnopqrstuvwxyz'));
console.log('--------------------------');
console.log(missingLetters('bcdf'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));
