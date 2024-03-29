/************************** FANCY RIDE *****************************/
/*
    Being a new Uber user, you have $20 off your first ride.
    You want to make the most out of it and drive in the fanciest car you can afford,
    without spending any out-of-pocket money.
    There are five options, from the least to the most expensive:
    'UberX', 'UberXL', 'UberPlus', 'UberBlack' and 'UberSUV'.
    You know the length (l) of your ride in miles and how much one mile costs for each car.
    Find the best car you can afford.

    Ex:
        For l = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], the output should be
        fancyRides(l, fares) = 'UberXL'.

        The cost for the ride in this car would be $15, which you can afford,
        but 'UberPlus' would cost $21, which is too much for you.
*/

function fancyRide(l, fares) {
    const affordedRides = {};

    for (let i = 0; i < fares.length; i++) {
        if (l * fares[i] <= 20) {
            affordedRides[i] = fares[i];
        }
    }

    console.log(affordedRides);


    const ridesArr = [];
    for (let key in affordedRides) {
        ridesArr.push(key);
    }

    console.log(ridesArr);

    const outputKey = Math.max(...ridesArr);

    switch (outputKey) {
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
        default:
            return null;
    }
}

function fancyRide2(l, fares) {
    const rides = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
    for (let i = fares.length - 1; i >= 0; i--) {
        if (l * fares[i] <= 20) {
            return rides[i];
        }
    }

    return null;
}

const l = 30;
const fares = [0.3, 0.5, 0.7, 1, 1.3];

console.log(fancyRide(l, fares));
console.log(fancyRide2(l, fares));
