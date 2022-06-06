/****************** ADD ******************/
/*
	Add numbers regardless of the number of arguments
*/

function add() {
  return Array.from(arguments).reduce((acc, num) => acc + num, 0);
}

function add1(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(add(3, 5, 1, 1, 5));
console.log(add1(3, 5, 1, 1, 5));
