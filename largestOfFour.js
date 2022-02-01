/******************** LARGEST OF FOUR ***********************/
/*
    Return an array consisting of the largest number from each provided sub-array.
    For simplicity, the provided array will contain exactly 4 sub-arrays.

    Remember, you can iterate through an array with a simple for loop,
    and access each member with array syntax arr[i].

    Example:
    largestOfFour([[1, 3, 4, 10, 5], [18, 49, 4], [11, 5], [2, 7]])
    returns [10, 49, 11, 7]
 */

function largestOfFour(arr) {
    largestArr = [];
    for (let i = 0; i < arr.length; i++) {
        largestArr.push(arr[i].sort((a, b) => b - a)[0]);
    }

    return largestArr;
}

// Better answer
function largestOfFour1(arr) {
    return arr.map((a) => {
        return a.sort((x, y) => y - x)[0];
    });
}

// One liner
const largestOfFour2 = (arr) => arr.map((a) => a.sort((x, y) => y - x)[0]);

console.log(largestOfFour([[1, 3, 4, 10, 5], [18, 49, 4], [11, 5], [2, 7]]));
console.log(largestOfFour1([[1, 3, 4, 10, 5], [18, 49, 4], [11, 5], [2, 7]]));
console.log(largestOfFour2([[1, 3, 4, 10, 5], [18, 49, 4], [11, 5], [2, 7]]));
