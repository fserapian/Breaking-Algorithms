/************************** FANCY RIDE *****************************/
/*
	Being a new Uber user, you have $20 off your first ride.
	You want to make the most out of it and drive in the fanciest car you can afford,
	without spending any out-of-pocket money.
	There are five options, from the least to the most expensive:
	'UberX', 'UberXL', 'UberPlus', 'UberBlack' and 'UberSUV'.
	You know the length I of you ride in miles and how much one mile costs for each car.
	Find the best car you can afford.

	Ex:
		For I = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], the output should be
		fancyRides(I, fares) = 'UberXL'.

		The cost for the ride in this car would be $15, which you can afford,
		but 'UberPlus' would cost $21, which is too much for you.
*/

function fancyRide(I, fares) {

	const affordedRides = {};

	for (let i = 0; i < fares.length; i++) {
		if (I * fares[i] <= 20) {
			affordedRides[i] = fares[i];
		}
	}

	const ridesArr = [];
	for (let key in affordedRides) {
		ridesArr.push(key);
	}

	const outputKey = Math.max(...ridesArr);

	switch(outputKey) {
		case 0:
			return 'UberX';
		case 1:
			return 'UberXL';
		case 2:
			return 'UberPlus';
		case 3:
			return 'UberBlack';
		case 4:
			return 'UberSUV';
	}

}

const I = 30;
const fares = [0.3, 0.5, 0.7, 1, 1.3];

console.log(fancyRide(I, fares));