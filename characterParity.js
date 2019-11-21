/*
Given a character, check if it represents an odd digit,
and even digit or not a digit at all.
Ex: For symbol = '5', characterParity(symbol) = 'odd'.
	For symbol = '8', characterParity(symbol) = 'even'.
	For symbol = 'q', characterParity(symbol) = 'not a digit'.
*/

function characterParity(symbol) {
	const num = parseInt(symbol);
	if (isNaN(num)) {
		return 'not a digit';
	} else {
		if (num % 2 === 0) {
			return 'even';
		} else {
			return 'odd';
		}
	}
}

// Shortcut code
function characterParity2(symbol) {
	const num = Number(symbol);
	return isNaN(num) ? 'not a digit' : num % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity2('5'));
console.log(characterParity2('8'));
console.log(characterParity2('q'));