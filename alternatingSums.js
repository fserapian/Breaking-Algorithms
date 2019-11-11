// get sums of odd indexes
// get sums of even indexes
// return them as an array

function alternatingSums(arr) {
	let evenSum = 0;
	let oddSum = 0;

	arr.forEach((num, i) => i % 2 === 0 ? evenSum += num : oddSum += num);

	return [evenSum, oddSum];

}


console.log(alternatingSums([50, 3, 50, 2, 5, 6]));