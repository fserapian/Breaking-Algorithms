/***************************** PALINDROM REARRANGING ****************************/
/*
	Given a string, find out if its characters can be rearranged
	to form a palindrom.

	Example:
		For inputString = 'aabb', palindromRearranging(inputString) = true.

	We can rearrange 'aabb' to make 'abba', which is a palindrom.
 */

function palindromRearranging(inputString) {
	const charArr = inputString.split('');

	const lettersObj = {
		'a': 0,
		'b': 0,
		'c': 0,
		'd': 0,
		'e': 0,
		'f': 0,
		'g': 0,
		'h': 0,
		'i': 0,
		'j': 0,
		'k': 0,
		'l': 0,
		'm': 0,
		'n': 0,
		'o': 0,
		'p': 0,
		'q': 0,
		'r': 0,
		's': 0,
		't': 0,
		'u': 0,
		'v': 0,
		'w': 0,
		'x': 0,
		'y': 0,
		'z': 0,
	};

	let oddCount = 0;

	for (let i = 0; i < charArr.length; i++) {
		lettersObj[charArr[i]]++;
	}

	for (let key in lettersObj) {
		if (lettersObj[key] % 2 !== 0) {
			oddCount++;
		}
	}

	return oddCount <= 1;
}

// Another solution
function palindromRearranging1(inputString) {
	const charArr = inputString.split('');
	const obj = {};
	let odds = 0;

	for (let i = 0; i < charArr.length; i++) {
		if (obj.hasOwnProperty(charArr[i])) {
			obj[charArr[i]]++;
		} else {
			obj[charArr[i]] = 1;
		}
	}

	for (let key in obj) {
		if (obj[key] % 2 !== 0) {
			odds++;
		}
	}

	return odds <= 1;
}


console.log(palindromRearranging1('suueeppeerr'));
console.log(palindromRearranging('suueeppeerr'));
