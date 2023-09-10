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

function areArraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const diffIndices = [];
    const diffValues = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            diffIndices.push(i);
            diffValues.push(arr1[i]);
        }
    }

    if (diffIndices.length === 0 || diffIndices.length === 2) {
        const [index1, index2] = diffIndices;
        const [value1, value2] = diffValues;

        // Check if swapping makes the arrays identical
        if (
            arr1[index1] === arr2[index2] &&
            arr1[index2] === arr2[index1]
        ) {
            return true;
        }
    }

    return false;
}

console.log(areSimilar([1, 3, 4], [3, 1, 4]));
console.log(areSimilar([1, 1, 2], [1, 2, 2]));
console.log(areSimilar([1, 5, 8, 3, 7], [7, 5, 8, 3, 1]));

console.log('------');

console.log(areArraysSimilar([1, 3, 4], [3, 1, 4]));
console.log(areArraysSimilar([1, 1, 2], [1, 2, 2]));
console.log(areArraysSimilar([1, 5, 8, 3, 7], [7, 5, 8, 3, 1]));
