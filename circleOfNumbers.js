/*
	Consider integer numbers from 0 to n - 1 written down along
	the circle in such a way that the distance between any two
	neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).
	Given n and firstNumber, find the number which is written in the radially
	opposite position to firtNumber.

	Ex: For n = 10, firtNumber = 2,
		circleOfNumbers(n, firstNumber) = 7. 
*/

function circleOfNumbers(n, firstNumber) {
	for (let i = 0; i < n; i++) {
		if (firstNumber >= n) {
			return undefined;
		}
		if (firstNumber === n / 2) {
			return 0;
		}
		if (firstNumber < n / 2) {
			return n / 2 + firstNumber;
		}
		if (firstNumber > n / 2) {
			return n / 2 - (n - firstNumber);
		}
	}
}

// Another Solution
function circleOfNumbers2(n, firstNumber) {
	const circle = [];
	const halfWay = n / 2;
	for (let i = 0; i < n; i++) {
		circle.push(i);
	}
	if (firstNumber >= n) {
		return undefined;
	}
	if (firstNumber < halfWay) {
		return circle[halfWay + firstNumber];
	}
	return circle[firstNumber - halfWay];
}

console.log(circleOfNumbers(12, 6));
console.log(circleOfNumbers2(12, 6));



