/********************** ARRAY PREVIOUS LESS **********************/
/*
  Given an array of integers, for each position i,
  search among the previous positions for the last (from the left)
  position that contains a smaller value.
  Store this value at position i in the answer.
  If no such value can be found, store -1 instead.

  Ex: arr = [3, 5, 2, 4, 5], arrayPreviousLess(arr) = [-1, 3, -1, 2, 4]
*/

function arrayPreviousLess(arr) {
  const newArr = [-1];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      newArr.push(arr[i - 1]);
    } else {
      newArr.push(-1);
    }
  }

  return newArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([8, 3, 2, 9, 10]));
