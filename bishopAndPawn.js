/*
Given the positions of a white bishop and a black pawn on the standard
chess board, determine whether the bishop can capture the pawn in one move.
This bishop has no restrictions in distance for each move, but is limited
to diagonal movement.

Ex: For bishop = 'a1' and pawn = 'c3',
	bishopAndPawn(bishop, pawn) = true.
*/


function bishopAndPawn(bishop, pawn) {
	const board = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5,
		'f': 6,
		'g': 7,
		'h': 8
	};

	bishopX = board[bishop[0]];
	bishopY = parseInt(bishop[1]);

	pawnX = board[pawn[0]];
	pawnY = parseInt(pawn[1]);

	return bishopX + pawnY === bishopY + pawnX;
}

console.log(bishopAndPawn('a1', 'a1'));