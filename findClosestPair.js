/********************* FIND CLOSEST PAIR *******************/
/*
    Given an array of integer numbers, we'd like to find the closest pair of elements that add up
    to sum. Return the distance between the closest pair (absolute difference between the two indices).
    If there isn't a pair that add up to sum, return -1.

    Example:
        For numbers = [1, 0, 2, 4, 3, 0] and sum = 5, 
        findClosestPair(numbers, sum) = 2.
        1 and 4 have a sum of 5, but 2 and 3 are closer.

        For numbers = [2, 3, 7] and sum = 8,
        findClosestPair(numbers, sum) = -1.

        There are no pairs that have a sum of 8.
*/

// Ok
function findClosestPair(numbers, sum) {
    const distances = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === sum) {
                distances.push(Math.abs(j - i));
            }
        }
    }
    return Math.min(...distances) === Infinity ? -1 : Math.min(...distances);
}

// Better
function findClosestPair1(numbers, sum) {
    let distance = -1;

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const distanceSum = numbers[i] + numbers[j];
            const absDistance = Math.abs(j - i);

            if (distanceSum === sum) {
                if (distance === -1 || absDistance < distance) {
                    distance = absDistance;
                }
            }
        }
    }
    return distance;
}



const numbers = [1, 0, 2, 4, 3, 0];
const sum = 5;
console.log(findClosestPair(numbers, sum));
console.log(findClosestPair1(numbers, sum));
