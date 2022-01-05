/************* MISSING NUMBER ************/
/*
  Ex: if we have and array arr = [1, 8, 6, 4, 5, 2, 7];
  missingNumber(arr) = 3;
*/

function missingNumber(arr) {
  let sorted = arr.sort((a, b) => a - b);

  if (arr[0] === 2) return 1;

  for (let i = 0; i < sorted.length - 1; i++) {
    if (arr[i] !== arr[i + 1] - 1) {
      return arr[i] + 1;
    }
  }

  return null;
}

function missingNumber1(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }

  return null;
}

const arr = [5, 4, 3, 2, 6, 7];
console.log(missingNumber(arr));
console.log(missingNumber1(arr));
