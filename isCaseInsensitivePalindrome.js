/*
Given a string, check if it can become a palindrome through a case change
of some (possibly, none) letters.
Ex: For str = 'AaBaa' isCaseInsensitivePalindrome(str) = true.
	For str = 'abac' isCaseInsensitivePalindrome(str) = false.
*/

// First Solution
function isCaseInsensitivePalindrome(str) {
	const lowerCaseStr = str.toLowerCase();
	for (let i = 0; i < lowerCaseStr.length/2; i++) {
		if (lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

// Second Solution
function isCaseInsensitivePalindrome2(str) {
	const strToLower = str.toLowerCase();
	return strToLower === strToLower.split('').reverse().join('');
}

console.log(isCaseInsensitivePalindrome('fafe'));