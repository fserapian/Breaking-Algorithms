/********************** EXPONENTIAL EMITION ****************/
/*
	Log `Hello` in an exponential way
	So it logs Hello in 1 sec, 2 sec, 4 sec, 8 sec, etc.
 */

let counter = 0;
let interval = 0;
function emitHello() {
	console.log('Hello', interval);
	interval = (2 ** counter) * 1000;
	counter++;
	setTimeout(emitHello, interval);
}

emitHello();
