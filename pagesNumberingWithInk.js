/*************************** PAGES NUMBERING WITH INK **********************/
/*
	You work in a company that prints and published books. You are responsible
	for designing the page numbering mechanism in the printer.
	You know how many digits a printer can print with the leftover ink.
	Now you want to write a function to determine what the last page
	of the book is that you can number given the current page and 
	numberOfDigits left.
	A page is considered numbered if it has the full number printed on it
	(e.g. if we are working with page 102 but have ink for only two digits
	then this page will not be considered numbered).

	It's guaranteed that you can number the current page, and that you can't
	number the last one in the book.

	Example:
		- For current = 1 and numberOfDigits = 5,
		  pagesNumberingWithInk(current, numberOfDigits) =  5.

		The following numbers will be printed 1, 2, 3, 4, 5.

		There are three independent sequences for systems 'stage_1', 'stage_2'
		and 'dragon'. These sequences are [1, 2], [10, 12] and [11, 111],
		respectively. The elements are in strictly increasing order for all three.

		- For current = 21 and numberOfDigits = 5,
		pagesNumberingWithInk(current, numberOfDigits) =  22.

		The following numbers will be printed 21, 22.

		- For current = 8 and numberOfDigits = 4,
		pagesNumberingWithInk(current, numberOfDigits) =  10.

		The following numbers will be printed 8, 9, 10.
 */


// // Incorrect
// function pagesNumberingWithInk(current, numberOfDigits) {
// 	const currentLength = current.toString().length;
// 	const remainder = numberOfDigits % currentLength;

// 	if (remainder > 0) {
// 		const num = numberOfDigits - remainder;
// 		const numToAdd = num / currentLength;
// 		return current + numToAdd - 1;
// 	} else {
// 		const numToAdd = numberOfDigits / currentLength;
// 		return current + numToAdd - 1;	
// 	}
// }

// // Incorrect
// function pagesNumberingWithInk1(current, numberOfDigits) {
// 	const currentLength = current.toString().length; 

// 	let numToAdd = Math.floor(numberOfDigits / currentLength) - 1;

// 	return current + numToAdd;
// }

function pagesNumberingWithInk2(current, numberOfDigits) {
	while (numberOfDigits >= current.toString().length) {
		numberOfDigits -= current.toString().length;

		if (numberOfDigits >= current.toString().length) {
			current++;
		}
	}

	return current;
}

console.log(pagesNumberingWithInk2(8, 4));
console.log(pagesNumberingWithInk2(21, 5));
console.log(pagesNumberingWithInk2(1, 5));


















