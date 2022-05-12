/*************************** BISHOP AND PAWN ***************************/
/*
  Given the positions of a white bishop and a black pawn on the standard
  chess board, determine whether the bishop can capture the pawn in one move.
  This bishop has no restrictions in distance for each move, but is limited
  to diagonal movement.

  Ex: For bishop = 'a1' and pawn = 'c3',
    bishopAndPawn(bishop, pawn) = true.

  o  o  o  o  o  o  o  o  8
  o  o  o  o  o  o  o  o  7
  o  o  o  o  o  o  o  o  6
  o  o  o  o  o  o  o  o  5
  o  o  o  o  o  o  o  o  4
  o  o  x  o  o  o  o  o  3
  o  o  o  o  o  o  o  o  2
  x  o  o  o  o  o  o  o  1
  A  B  C  D  E  F  G  H
*/

function bishopAndPawn(bishop, pawn) {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const bishopX = board[bishop.charAt(0)];
  const bishopY = Number(bishop.charAt(1));

  const pawnX = board[pawn.charAt(0)];
  const pawnY = Number(pawn.charAt(1));

  return bishopX + pawnY === bishopY + pawnX;
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('a1', 'c2'));
