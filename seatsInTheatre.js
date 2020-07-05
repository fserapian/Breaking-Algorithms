/******************** SEATS IN THEATRE *******************/
/*
	Your friend advised you to see a new performance in the most popular
	theatre in the city.
	He knows a lot about art and his advice is usually good,
	but not this time: the performance turned out to be awfully dull.
	It's so so bad you want to sneak out, which is quite simple,
	especially since the exit is located right behind your row to the left.
	All you need to do is climb over your seat and make your way to the exit.

	The main problem is your shyness: you're afraid that you'll end up
	blocking the view (even if only for a couple of seconds) of all people
	who sit behind you and in your column or the columns to your left.

	To gain some courage, you decide to calculate the number of such people
	and see if you can possibly make it to the exit without disturbing
	too many people.

	Given the total number of rows and columns in the theatre
	(nRows and nCols, respectively), and the row and column you're sitting in,
	return the number of people who sit strictly behind you and in your column
	or to the left, assuming all seats are occupied.

	Example:
	For nCols = 16, nRows = 11, col = 5 and row = 3
	the output should be seatsInTheatre(nCols, nRows, col, row) = 96


	- - - - o o o o o o o o o o o o
	- - - - o o o o o o o o o o o o
	- - - - o o o o o o o o o o o o
	- - - - o o o o o o o o o o o o
	- - - - o o o o o o o o o o o o
	- - - - o o o o o o o o o o o o
	- - - - o o o o o o o o o o o o
	- - - - o o o o o o o o o o o o
	- - - - x - - - - - - - - - - -
	- - - - - - - - - - - - - - - -
	- - - - - - - - - - - - - - - -
 */

function seatsInTheatre(nCols, nRows, col, row) {
	const colsEffected = nCols - col + 1;
	const rowsEffected = nRows - row;
	return colsEffected * rowsEffected;
}

// One liner
const seatsInTheatre1 = (nCols, nRows, col, row) => (nCols - col +1) * (nRows - row);

console.log(seatsInTheatre(16, 11, 5, 3));
console.log(seatsInTheatre1(16, 11, 5, 3));
