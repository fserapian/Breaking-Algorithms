/*
m children have got m pieces of candy. They want to eat as much candy as they can,
but each child must eat exactly the same amount of candy as any other child.
Determine how many pieces of candy will be eaten by all the children together.
Individual candy cannot be split.

Ex: For 3 children and 10 candies
	candies(3, 10) = 9
*/

function candies(children, candies) {
	let maxCandies = candies;
	if (candies % children !== 0) {
		maxCandies -= maxCandies % children;
	}
	return maxCandies;
}

// Another Solution
function candies2(children, candies) {
	const childCandies = Math.floor(candies / children);
	return childCandies * children;
}

console.log(candies2(4, 11));