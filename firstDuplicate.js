/******************* FIRST DUPLICATE ******************/
/*
    Given an array a that contains only numbers in the range from 1 to a.length,
    find the first duplicate number for which of the second occurence has the minimal index.
    In other words, if there are more than 1 duplicate numbers, return the number for which
    the second occurence has a smaller index than the second occurence of the other number does.
    If there are no such elements, return -1.

    Example:
        For a = [2, 1, 3, 5, 3, 2], firstDuplicate(a) = 3.
    
    There are 2 duplicates: number 2 and 3. The second occurence of 3 has a smaller index
    than the second occurence of 2 does, so the answer is 3.

    For a = [2, 4, 3, 5, 1], firstDuplicate(a) = -1.
*/

function firstDuplicate(a) {
    let firstDuplicate = {};

    for (let num of a) {
        if (firstDuplicate.hasOwnProperty(num)) {
            return num;
        }

        firstDuplicate[num] = num;
    }

    return -1;
}

const a = [2, 1, 3, 5, 3, 2];
const b = [2, 4, 3, 5, 1];
console.log(firstDuplicate(a));
console.log(firstDuplicate(b));