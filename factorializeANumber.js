/************* FACTORIALIZE A NUMBER ***************/
/*
    Return the factorial of the provided integer.
    If the integer is represented with the letter n,
    a factorial is the product of all positive integers
    less than or equal to n.

    Factorials are often represented with the shorthand notation n!
    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

    Only integers greater than or equal to zero will be supplied
    to the function.
    Remember to use Read-Search-Ask if you get stuck.
    Write your own code.
    Ex:
        factorializeANumber(5) returns 120.
        factorializeANumber(10) returns 3628800.
*/

function factorializeANumber(n) {
    if (n < 0) {
        return null;
    }

    if (n <= 1) {
        return 1;
    }

    return n * factorializeANumber(n - 1);
}

function factorializeANumber1(n) {
    let f = 1;

    if (n < 0) {
        return null;
    }

    for (let i = 2; i <= n; i++) {
        f *= i;
    }

    return f;
}

function factorializeANumber2(n) {
    let f = 1;
    let i = 2;

    if (n < 0) {
        return null;
    }

    while (i <= n) {
        f = f * i;
        i++;
    }

    return f;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber1(5));
console.log(factorializeANumber2(5));
