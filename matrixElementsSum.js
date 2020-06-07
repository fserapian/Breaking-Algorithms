/************************* MATRIX ELEMENTS SUM ****************************/
/*
	After becoming famous, CodeBots decided to move to a new building and
	live together. The building is represented by a rectangular matrix of rooms.
	Each cell containing an integer - the price of the room.
	Some rooms are free (their cost is 0), but that's probebly because
	they are haunted, so all the bots are afraid of them.
	That is why any room that is free or is located anywhere below a free room
	in the same column is not considered suitable for the bots.

	Help the bots calculate the total price of all the rooms that are suitable
	for them.

	Example:
		For matrix = [
			[0, 1, 1, 2],
			[0, 5, 0, 0],
			[2, 0, 3, 3]
		];

	The output should be matrixElementsSum(matrix) = 9

	Here's the rooms matrix with unsuitable rooms marked with 'x'

	[
		[x, 1, 1, 2],
		[x, 5, x, x],
		[2, x, 3, 3]
	]

	Thus, the answer is 1 + 1 + 2 + 5 = 9

 */

// Incorrect
function matrixElementsSum(matrix) {
	let count = 0;

	const hauntedIndexes = [];

	for (let i = 0; i < matrix.length; i++) {

		for (let j = 0; j < matrix[i].length; j++) {

			if (matrix[i][j] === 0) {
				hauntedIndexes.push(j);
			}

			if (!hauntedIndexes.includes(j)) {
				count += matrix[i][j];
   	 		}
		}
	}
	return count;
}

// Correct
function matrixElementsSum1(arr) {
 
    let marked = {};
    let sum = 0;
    for (let k = 0; k < arr.length; k++) {
    	console.log(marked);
        for (let i = 0; i < arr[k].length; i++) {
            if (arr[k][i] === 0) {
                marked[i] = 'x'; 
            }
            if (!marked.hasOwnProperty(arr[k][i])) {
                sum += arr[k][i];
            }
        }
    }
 
    return sum;
 
}

const matrix = [
	[0, 1, 1, 2],
	[0, 5, 0, 0],
	[2, 0, 3, 3],
];
console.log(matrixElementsSum(matrix));
console.log(matrixElementsSum1(matrix));
