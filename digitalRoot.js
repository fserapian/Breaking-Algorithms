/********************** DIGITAL ROOT ***********************/
/*
    A digital root is the recursive sum of all the digits in a number.
    Given n, take the sum of digits of n.
    If that value has two digits, continue reducing in this way
    until a signle-digit number is produced.
    This is only applicable to the natural numbers.

    Examples:

    digitalRoot(16)
    => 1 + 6
    => 7

    digitalRoot(942)
    => 9 + 4 + 2
    => 15 ...
    => 1 + 5
    => 6
 */

function digitalRoot(n) {
    while (n > 9) {
        let sum = 0;

        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }

        n = sum
    }

    return n;
}

function digitalRoot1(n) {
    while (n > 9) {
        n = n.toString().split('').reduce((sum, num) => sum + +num, 0);
    }

    return n;
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot1(16));
console.log(digitalRoot1(942));
