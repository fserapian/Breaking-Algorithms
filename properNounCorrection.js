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

// Another solution
const properNounCorrection2 = noun => noun.split('').map((n, i) => {
    if (i === 0) {
        return n.toUpperCase();
    } else {
        return n.toLowerCase();
    }
}).join('');

// One liner
const properNounCorrection3 = noun => noun.split('').map((n, i) => i === 0 ? n.toUpperCase() : n.toLowerCase()).join('');

console.log(properNounCorrection('pARIS'));
console.log(properNounCorrection('John'));
console.log(properNounCorrection1('pARIS'));
console.log(properNounCorrection1('John'));
console.log(properNounCorrection2('pARIS'));
console.log(properNounCorrection2('John'));
console.log(properNounCorrection3('pARIS'));
console.log(properNounCorrection3('John'));
