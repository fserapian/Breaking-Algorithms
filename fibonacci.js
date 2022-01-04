/********************** FIBONACCI *********************/
/* 
  Get number at fibonacci sequence by an index
  sequence = 1, 1, 2, 3, 5, 8, 13, 21, etc.
*/

function fibonacci(n) {
  if (n < 0) {
    return null;
  }

  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return n2;
}

// Recursively
function fib(n) {
  if (n < 0) {
    return null;
  }

  if (n <= 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

// In one line
const f = (n) => n === 0 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log('----');
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(-3));
console.log('----');
console.log(f(0));
console.log(f(1));
console.log(f(2));
console.log(f(3));
