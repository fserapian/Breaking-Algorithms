/***************** PERIMETER ELEMENTS SUM MATRIX *****************/
/*
	The algorithm should return the sum of all the elements on the sides
	of the 2-d array (Sum of the parameter elements of the matrix)

	Ex: If we have 2-d array like so:
	const matrix = [
		[3, 1, 1, 1],
		[2, 3, 1, 1],
		[3, 1, 1, 3],
	];

	perimeterElementsSumMatrix(matrix) = 17

	sum =
	3 + 1 + 1 + 1 + 1 + 3 + 1 + 1 + 3 + 2 = 17
*/

const matrix = [
    [3, 1, 1, 1],
    [2, 3, 1, 1],
    [3, 1, 1, 3],
];

function perimeterElementsSumMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    let sum = 0;
    const startSum = matrix[0].reduce((acc, num) => acc + num, 0);
    const endSum = matrix[rows - 1].reduce((acc, num) => acc + num, 0);

    sum += startSum + endSum;

    for (let i = 1; i < rows - 1; i++) {
        sum += matrix[i][0] + matrix[i][columns - 1];
    }

    return sum;
}

console.log(perimeterElementsSumMatrix(matrix));