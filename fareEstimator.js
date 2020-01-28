/****************** FARE ESTIMATOR ***********************/
/*
	Uber is building a Fare Estimator that can tell you how much you ride
	will cost before you request it. It works by passing aproximated ride
	distance and ride time through this formula:
	(Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
	
	Where cost per minute and cost per mile depend on the car type.

	You are one of the engineers building the Fare Estimator, so knowing
	cost per minute and cost per mile for each car type, as well as ride distance
	and ride time, return the fare estimates for all car types.

	Example:
	For ride_time = 30, ride_distance = 7, cost_per_minute = [0.2, 0.35, 0.4, 0.45]
	and cost_per_mile = [1.1, 1.8, 2.3, 3.5], the output should be
	fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile)
		= [13.7, 23.1, 28.1, 38].

*/

function fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile) {
    const len = costPerMinute.length;

    const res1 = [];

    for (let i = 0; i < len; i++) {
        res1.push((rideTime * costPerMinute[i] + rideDistance * costPerMile[i]).toFixed(1));
    }

    const res2 = [];

    res1.forEach(numStr => res2.push(parseFloat(numStr)));

    return res2;
}

const rideTime = 30,
    rideDistance = 7,
    costPerMinute = [0.2, 0.35, 0.4, 0.45],
    costPerMile = [1.1, 1.8, 2.3, 3.5];

console.log(fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile));












