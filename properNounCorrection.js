/*********************** PROPER NOUN CORRECTION ***********************/
/*
	Proper nouns always begin with a capital letter,
	followed by small letters.

	Correct a given proper noun so that it fits this statement

	Example:
		- For noun = 'pARIS', properNounCorrection(noun) = 'Paris'
		- For noun = 'John', properNounCorrection(noun) = 'John'
 */

function properNounCorrection(noun) {
	const headLetter = noun[0].toUpperCase();
	const restOfNoun = noun.substring(1).toLowerCase();

	return headLetter + restOfNoun;
}

// One liner
const properNounCorrection1 = noun => noun[0].toUpperCase() + noun.slice(1).toLowerCase();

console.log(properNounCorrection('pARIS'));
console.log(properNounCorrection('John'));
console.log(properNounCorrection1('pARIS'));
console.log(properNounCorrection1('John'));
