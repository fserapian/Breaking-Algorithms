/********************* REVERSE A STRING ************************/
/*
	Reverse the provided string.
	You may want to turn the string into an array before you can reverse it.
	
	Your result must be a string.
 */

function reverseAString(str) {
	return str.split('')
			.reverse()
			.join('');
}

// One liner
const reverseAString1 = str => str.split('').reverse().join('');

function reverseAString2(str) {
	let reversed = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}

console.log(reverseAString('hello'));
console.log(reverseAString1('hello'));
console.log(reverseAString2('hello'));
