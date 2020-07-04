/************************** RATING THRESHOLD ****************************/
/*
	In Thumbtack, users are able to rate Pros based on their exprerience
	working with them. Each rating is an integer ranging from 1 to 5,
	and all ratings are averaged to produce a single number rating for
	any given Pro. Those Pros who have a rating lower than a specific threshold
	are manually reviewed by Thumbtack staff to ensure high quality of service.

	You're given a list of ratings for some Pros.
	Find out which Pros should be manually reviewed.

	Example:
	For threshold = 3.5 and ratings = [[3, 4], [3, 3, 3, 4], [4]]
	ratingThreshold(threshold, ratings) = [1]

	Assume that we have 3 Pros that have received the following ratings:
	[3, 4], [3, 3, 3, 4] and [4].
	Then And if threshold = 3.5
	The answer is ratingThreshold(threshold, ratings) = [1].

	The first Pro's rating is 3.5, the second one's is 3.25,
	and the last one is 4, so only the second Pro should be reviewed manually.
 */

function ratingThreshold(threshold, ratings) {

	const averageRatings = [];

	for (let i = 0; i < ratings.length; i++) {
		const ratingTotal = ratings[i].reduce((acc, rating) => acc + rating, 0);
		const ratingAvg = ratingTotal / ratings[i].length;

		averageRatings.push(ratingAvg);
	}

	const res = [];
	for (let i = 0; i < averageRatings.length; i++) {
		if (averageRatings[i] < threshold) {
			res.push(i);
		}
	}
	return res;
}

function ratingThreshold1(threshold, ratings) {
	const res = [];
	for (let i = 0; i < ratings.length; i++) {
		let total = 0;
		for (let j = 0; j < ratings[i].length; j++) {
			total += ratings[i][j];
		}

		const avg = total / ratings[i].length;
		if (avg < threshold) {
			res.push(i);
		}
	}
	return res;
}

const threshold = 3.5;
const ratings = [[3, 4], [3, 3, 3, 4], [4]];

console.log(ratingThreshold(threshold, ratings));
console.log(ratingThreshold1(threshold, ratings));
