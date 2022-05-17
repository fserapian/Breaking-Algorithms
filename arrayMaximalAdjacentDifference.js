/************************ ARRAY MAXIMAL ADJACENT DIFFERENCE ************************/
/*
  Given an array of integers, find the maximal absolute
  difference between any two of its adjacent elements
  Example: arr = [2, 4, 1, 0], arrayMaximalAdjacentDifference(arr) = 3
*/

function arrayMaximalAdjacentDifference(arr) {
  const diffs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    diffs.push(Math.abs(arr[i] - arr[i + 1]));
  }

  // return diffs.reduce((max, num) => (num > max ? num : max), diffs[0]);
  return Math.max(...diffs);
}

function arrayMaximalAdjacentDifference1(arr) {
  let maxDiff = Math.abs(arr[1] - arr[0]);

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i + 1] - arr[i]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference1([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 4, 50, 1, 0, 10, 100]));
console.log(arrayMaximalAdjacentDifference1([2, 4, 50, 1, 0, 10, 100]));
