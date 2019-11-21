/*
Given two cells on the standard chess board,
determine whether they have the same color or not.
Ex: cell1 = 'b1', cell2 = 'd1',
	chessBoardColor(cell1, cell2) = true.
	cell1 = 'a1', cell2 = 'h3',
	chessBoardColor(cell1, cell2) = false.
*/

// Mapping board
const board = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5,
		'f': 6,
		'g': 7,
		'h': 8,
	};

function chessBoardCellColor(cell1, cell2) {

	const x1 = board[cell1[0]],
		y1 = parseInt(cell1[1]),
		x2 = board[cell2[0]],
		y2 = parseInt(cell2[1]);

	return ((x1 % 2 !== 0 && y1 % 2 !== 0 || x1 % 2 === 0 && y1 % 2 === 0)
		&& (x2 % 2 !== 0 && y2 % 2 !== 0 || x2 % 2 === 0 && y2 % 2 === 0))
		|| ((x1 % 2 !== 0 && y1 % 2 === 0 || x1 % 2 === 0 && y1 % 2 !== 0)
		&& (x2 % 2 !== 0 && y2 % 2 === 0 || x2 % 2 === 0 && y2 % 2 !== 0));
}

// Another Solution
function chessBoardCellColor2(cell1, cell2) {

	const symbol1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
	const symbol2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

	return symbol1 === symbol2;
}

console.log(chessBoardCellColor('b1', 'd1'));
console.log(chessBoardCellColor2('a1', 'h3'));




