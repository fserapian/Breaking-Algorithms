/*************** ALTERNATING SUM ***************/
/*
  Get sums of odd indexes.
  Get sums of even indexes.
  Return them as an array.

  Ex: arr = [50, 3, 50, 2, 5, 6]
    => [105, 11]

    (*) 50 + 50 + 5 = 105
    (*) 3 + 2 + 6 = 11
*/

function alternatingSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach((num, i) => (i % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

function alternatingSums1(arr) {
  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => num % 2 !== 0;
  const evenSum = arr.reduce((acc, num, i) => (isEven(i) ? acc + num : acc), 0);
  const oddSum = arr.reduce((acc, num, i) => (isOdd(i) ? acc + num : acc), 0);

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 3, 50, 2, 5, 6]));
console.log(alternatingSums1([50, 3, 50, 2, 5, 6]));
