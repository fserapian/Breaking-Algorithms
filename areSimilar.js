/********************** ARE SIMILAR **********************/
/*
  Two arrays are similar if we can swap one pair AT MOST in first array
  to obtain same values in second array

  [1, 3, 4] === [3, 1, 4]
  [1, 1, 2] !== [1, 2, 2]
 */

function areSimilar(arr1, arr2) {
  const c = [];
  let d = [];

  // if (arr1.toString() === arr2.toString()) {
  //   return true;
  // }

  if (arr1.every((el, i) => el === arr2[i])) {
    return true;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      c.push(arr1[i]);
      d.push(arr2[i]);
    }
  }

  // if (c.length === 2 && c.toString() === d.reverse().toString()) {
  //   return true;
  // }

  d = d.reverse();
  if (c.length === 2 && c.every((el, i) => el === d[i])) {
    return true;
  }

  return false;
}

console.log(areSimilar([1, 3, 4], [3, 1, 4]));
console.log(areSimilar([1, 1, 2], [1, 2, 2]));
console.log(areSimilar([1, 5, 8, 3, 7], [7, 5, 8, 3, 1]));
