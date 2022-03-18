/******************** EXTRACT MATRIX COLUMN *******************/
/*
    For matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]],
    and column = 2.
    
    extractMatrixColumn(matrix, column) = [1, 0, 3]
*/

function extractMatrixColumn(matrix, column) {
    const arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr.push(matrix[i][column]);
    }
    return arr;
}

function extractMatrixColumn1(matrix, column) {
    return matrix.map((row) => row[column]);
}

// One liner
const extractMatrixColumn2 = (matrix, column) => matrix.map((row) => row[column]);


const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
const column = 2;

console.log(extractMatrixColumn(matrix, column));
console.log(extractMatrixColumn1(matrix, column));
console.log(extractMatrixColumn2(matrix, column));
