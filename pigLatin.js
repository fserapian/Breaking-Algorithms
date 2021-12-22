/************************ PIG LATIN ****************************/
/*
	Translate the provided string to pig latin.
	Pig latin takes the first consonant (or consonant cluster)
	of an English word, moves it to the end of the word and suffixes
	an 'ay'.

	If a word begins with a vowel you just add 'way' to the end.
	Input strings are guaranteed to be English words in all lowercase.

	Example:
		pigLatin('glove') should return 'oveglay'.
		pigLatin('eight') should return 'eightway'.
 */

function pigLatin(word) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	let transformed = '';
	if (vowels.includes(word[0])) {
		transformed = word + 'way';
	} else {
		let partToMove = '';
		let index = 0;
		for (let i = 0; i < word.length; i++) {
			if (vowels.includes(word[i])) {
				index = i;
				break;
			}
			partToMove += word[i];
		}
		transformed = word.substr(index) + partToMove + 'ay';
	}
	return transformed;
}

function pigLatin1(word) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	if (vowels.includes(word[0])) {
		return word + 'way';
	}

	let firstPart = '';
	let secondPart = '';
	for (let i = 0; i < word.length; i++) {
		if (vowels.includes(word[i])) {
			firstPart += word.slice(i);
			break;
		}

		secondPart += word[i];
	}

	return firstPart + secondPart + 'ay';
}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));
console.log(pigLatin1('glove'));
console.log(pigLatin1('eight'));
