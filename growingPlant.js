/********************** GROWING PLAN ********************************/
/*
	Each day a plant is growing by upSpeed meters. Each night that plant's height
	decreases by downSpeed meters due to the lack of the sun heat.
	Initially, plant is 0 meters tall.
	We plant the seed at the beginning of a day.
	We want to know when the height of the plant will reach a certain level.

	Example:
	For upSpeed = 100, downSpeed = 10 and desiredHeight = 910
	growingPlant(upSpeed, downSpeed, desiredHeight) = 10.
*/

function growingPlant(upSpeed, downSpeed, desiredHeight) {
	let initHeight = 0;
	let days = 0;
	while (initHeight < desiredHeight) {
		initHeight += upSpeed;

		if (initHeight < desiredHeight) {
			initHeight -= downSpeed;
		} 

		days++;
	}
	return days;
}

console.log(growingPlant(100, 10, 910));