/*
Given a string, check if it is a palindrome.
Ex:
inputString = 'aabaa', checkPalindrome(inputString) = true.
inputString = 'abac', checkPalindrome(inputString) = false.
inputString = 'a', checkPalindrome(inputString) = true.
*/


function checkPalindrome(str) {
	const lowerCaseStr = str.toLowerCase();

	for (let i = 0; i < lowerCaseStr.length / 2; i++) {
		if (lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

// Another Solution
function checkPalindrome2(str) {
	return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

console.log(checkPalindrome2('Abba'));
