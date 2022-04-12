/******** CROSSING SUM *********/
/*
    Given a rectangular matrix and integers a and b, consider the union of the ath row
    and the bth (both 0-based) column of the matrix (i.e. all cells that belong either
    to the ath row or to the bth column, or to both). Return sum of all elements of that union.

    Example:
    For matrix = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], a = 1, b = 3
    crossingSum(matrix, a, b) = 12.

    Here (2 + 2 + 2 + 2) + (1 + 3) = 12.
*/

function crossingSum(matrix, a, b) {
    const rowSum = matrix[a].reduce((acc, cur) => acc + cur, 0);
    const columnSum = matrix.reduce((acc, cur) => acc + cur[b], 0);
    return rowSum + columnSum - matrix[a][b];
}

console.log(crossingSum([[1, 5, 1], [2, 5, 2], [3, 5, 3]], 1, 1));
console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 1));
