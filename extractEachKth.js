/************** EXTRACT EACH Kth *************/
/*
    Given an array of integers, remove every kth element from it.
    
    Ex: For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3.

    extractEachKth(inputArray) = [1, 2, 4, 5, 7, 8, 10]

*/

function extractEachKth(inputArr, k) {
    let step = k;
    return inputArr.filter((num, i) => {
        if (i !== step - 1) {
            return num;
        }
        step = step + k;
    });
}

function extractEachKth1(arr, k) {
    let step = k;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== step - 1) {
            res.push(arr[i]);
        } else {
            step += k;
        }
    }
    return res;
}

function extractEachKth2(arr, k) {
    return arr.filter((num, i) => (i + 1) % k !== 0);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;

console.log(extractEachKth(inputArray, k));
console.log(extractEachKth1(inputArray, k));
console.log(extractEachKth2(inputArray, k));
