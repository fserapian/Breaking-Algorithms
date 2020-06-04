/******************* LARGEST NUMBER BASED OF N *******************/
/*
	Example:
		For n = 2, largestNumber(n) = 99
 */

function largestNumber(n) {
	let str = '';
	for (let i = 0; i < n; i++) {
		str += '9';
	}

	return parseInt(str);
}

function largestNumber1(n) {
	const str = '9'.repeat(n);
	return parseInt(str);
}

console.log(largestNumber(2));
console.log(largestNumber1(2));
