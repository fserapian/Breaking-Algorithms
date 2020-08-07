/****************** SUM ALL PRIMES ************************/
/*
	Sum all prime numbers up to and including the provided number.

	A prime number is defined as a number greater than one and having
	only two divisors, one and itself. For example, 2 is a prime number
	because it's only divisible by one and two.

	The provided number may not be a prime.

	Example:
		sumAllPrimes(10) should return 17
		sumAllPrimes(977) should return 73156
 */

function sumAllPrimes(n) {
	if (n < 2) {
		return 0;
	}

	let sumPrimes = 0;

	for (let i = 2; i <= n; i++) {
		for (let j = 2; j <= i; j++) {
			if (i === j) {
				sumPrimes += i;
			}

			if (i % j === 0) {
				break;
			}
		}
	}

	return sumPrimes;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
