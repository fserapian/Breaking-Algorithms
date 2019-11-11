// shift each letter in string by one letter
// function alphabeticShift(str) {
// 	return str.split('')
// 				.filter(letter => letter === ' ' || letter >= 'A' && letter <= 'z')
// 				.map(letter => {
// 					if (letter === ' ') {
// 						return ' ';
// 					} else if (letter === 'z') {
// 						return 'a'.charCodeAt(0);
// 					} else if (letter === 'Z') {
// 						return 'A'.charCodeAt(0);
// 					} else {
// 						return letter.charCodeAt(0) + 1;
// 					}
// 				})
// 				.map(code => String.fromCharCode(code))
// 				.join('');
// }

function alphabeticShift(str) {
	const shiftedAlpha = {
		'a': 'b', 'b': 'c',
		'c': 'd', 'd': 'e',
		'e': 'f', 'f': 'h',
		'h': 'i', 'i': 'j',
		'j': 'k', 'k': 'l',
		'l': 'm', 'm': 'n',
		'n': 'o', 'o': 'p',
		'p': 'q', 'q': 'r',
		'r': 's', 's': 't',
		't': 'u', 'u': 'v',
		'v': 'w', 'w': 'x',
		'x': 'y', 'y': 'z'
	};

	const arr = str.split('');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = shiftedAlpha[arr[i]];
	}
	return arr.join('');

}

console.log(alphabeticShift('abcd'));











