/********************* CHESS BOARD CELL COLOR **************************/
/*
  Given two cells on the standard chess board,
  determine whether they have the same color or not.
  Ex: cell1 = 'b1', cell2 = 'd1',
    chessBoardColor(cell1, cell2) = true.
    cell1 = 'a1', cell2 = 'h3',
    chessBoardColor(cell1, cell2) = false.

    (w): White
    (b): Black

    8 (w) (b) (w) (b) (w) (b) (w) (b)
    7 (b) (w) (b) (w) (b) (w) (b) (w)
    6 (w) (b) (w) (b) (w) (b) (w) (b)
    5 (b) (w) (b) (w) (b) (w) (b) (w)
    4 (w) (b) (w) (b) (w) (b) (w) (b)
    3 (b) (w) (b) (w) (b) (w) (b) (w)
    2 (w) (b) (w) (b) (w) (b) (w) (b)
    1 (b) (w) (b) (w) (b) (w) (b) (w)
       a   b   c   d   e   f   g   h
*/

function chessBoardCellColor(cell1, cell2) {
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

  const x1 = board[cell1.charAt(0)];
  const y1 = parseInt(cell1.charAt(1));
  const x2 = board[cell2.charAt(0)];
  const y2 = parseInt(cell2.charAt(1));

  return ((x1 + y1) % 2) === ((x2 + y2) % 2);
}

// Another Solution
function chessBoardCellColor1(cell1, cell2) {
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

  const symbol1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const symbol2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return symbol1 === symbol2;
}

console.log(chessBoardCellColor('b1', 'd1'));
console.log(chessBoardCellColor1('b1', 'd1'));
console.log(chessBoardCellColor('a1', 'h3'));
console.log(chessBoardCellColor1('a1', 'h3'));
