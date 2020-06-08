/********************** MAX MULTIPLE ***************************/
/*
	Given a divisor and a bound, find the largest integer N such that:
	- N is divisible by divisor
	- N is less or equal to bound
	- N is greater than 0

	It is guarenteed that such a number exists.

	Example:
	For divisor = 3 and bound = 10,
	maxMultiple(divisor, bound) = 9.

	The largest integer divisible by 3 and not larger than 10 is 9.
 */

function maxMultiple(divisor, bound) {
	const remainder = bound % divisor;
	return bound - remainder;
}

console.log(maxMultiple(3, 8));
