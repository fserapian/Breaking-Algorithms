/***************************** REFLECT STRING ******************************/
/*
	Define an alphabet reflection as follows:
	a turns into z, b turns into y, c turns into x, 
	..., n turns into m, m turns into n, ..., z turns into a.

	Define a string reflection as the result of applying the alphabet
	reflection to each of its characters.
	Reflect the given string.

	Example:
	For inputString = 'name', reflectString(inputString) = 'mznv'
 */

function reflectString(inputString) {
	const reflectObj = {
		'a': 'z',
		'b': 'y',
		'c': 'x',
		'd': 'w',
		'e': 'v',
		'f': 'u',
		'g': 't',
		'h': 's',
		'i': 'r',
		'j': 'q',
		'k': 'p',
		'l': 'o',
		'm': 'n',
		'n': 'm',
		'o': 'l',
		'p': 'k',
		'q': 'j',
		'r': 'i',
		's': 'h',
		't': 'g',
		'u': 'f',
		'v': 'e',
		'w': 'd',
		'x': 'c',
		'y': 'b',
		'z': 'a',
	}

	let res = '';
	for (let i = 0; i < inputString.length; i++) {
		res += reflectObj[inputString[i]];
	}
	return res;
}

console.log(reflectString('name'));
