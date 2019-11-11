// add numbers regardless of the number of arguments
// function add() {
// 	return Array.from(arguments).reduce((acc, num) => acc + num);
// }

function add(...nums) {
	return nums.reduce((acc, n) => acc + n);
}

console.log(add(3, 5, 1, 1, 5));