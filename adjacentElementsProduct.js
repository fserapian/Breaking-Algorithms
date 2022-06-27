/******************** ADJACENT ELEMENT PRODUCT ********************/
/*
  Find the larget product of adjacent elements

  arr = [3, 6, -2, -5, 7, 3]
  fn(arr) = 21
*/

function adjacentElementsProduct(arr) {
  let largestProd = arr[0] * arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    product = arr[i] * arr[i + 1];
    largestProd = product > largestProd ? product : largestProd;
  }

  return largestProd;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([9, 5, -6, -6, 1, 35]));
