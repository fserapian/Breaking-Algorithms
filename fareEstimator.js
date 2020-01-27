function fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile) {
    const len = costPerMinute.length;

    const res = [];

    for (let i = 0; i < len; i++) {
        res.push(rideTime * costPerMinute[i] + rideDistance * costPerMile[i]);
    }

    return res;
}

const rideTime = 30,
    rideDistance = 7,
    costPerMinute = [0.2, 0.35, 0.4, 0.45],
    costPerMile = [13.7, 23.1, 28.1, 38];

console.log(fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile));