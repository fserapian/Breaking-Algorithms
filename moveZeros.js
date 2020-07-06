/********************* MOVE ZEROS ****************************/
/*
	The objective is move all zeros in array to the end of it
	Example:
	For arr = [false, 8, 'hfds', 0, 'h', 0, true],
	The output should be moveZeros(arr) = [false, 8, 'hfds', 'h', true, 0, 0],
 */

function moveZeros(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr.push(arr[i]);
			arr.splice(i, 1);
		}
	}
	return arr;
}

function moveZeros1(arr) {
	const resArr = [];
	let zeroCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			zeroCount++;
		} else {
			resArr.push(arr[i]);
		} 
	}
	for (let i = 0; i < zeroCount; i++) {
		resArr.push(0);
	}
	return resArr;
}

console.log(moveZeros([false, 8, 'hfds', 0, 'h', 0, true]));
console.log(moveZeros1([false, 8, 'hfds', 0, 'h', 0, true]));
