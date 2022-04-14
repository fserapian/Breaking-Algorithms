/*********** CONTAINS DUPLICATES ***********/
/*
    Given an array of integers, write a function that determines whether the array
    contains any duplicates. Your function should return true if any elemnt appears
    at least twice in the array, and it should return false if every element is distinct.

    Example:
    For arr = [1, 2, 3, 1], containsDuplicates(arr) = true.
    There are two 1s in the given array.

    For arr = [3, 1], containsDuplicates(arr) = false.
    The given array contains no duplicates.
*/

function containsDuplicates(arr) {
    const sorted = arr.sort((x, y) => x - y);

    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            return true;
        }
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
