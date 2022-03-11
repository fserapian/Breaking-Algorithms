/*************************** FERMACTOR ****************************/
/*
    Fermat's factorization method is: If a * b = n (where a <= b),
    then there exists some c and d such that n = c^2 - d^2.
    Your goal is to return for given n such c and d as an array.
    Since we want c and d to be uniquely determined, in all test
    cases n is a semiprime number.

    Example:
        For n = 15, the output should be
        fermactor(n) = [4, 1].
        15 = 4^2 - 1^2.
*/

function fermactor(n) {
    const res = [];

    for (let i = 1; i < n / 2; i++) {
        if (Math.pow(i, 2) > n) {
            res.push(i);
            break;
        }
    }

    res.push(Math.sqrt(Math.pow(res[0], 2) - n));

    return res;
}

function fermactor1(n) {
    for (let i = 1; i < n / 2; i++) {
        for (let j = 1; j < i; j++) {
            const res = i ** 2 - j ** 2;

            if (res === n) {
                return [i, j];
            }
        }
    }
}

console.log(fermactor(15));
console.log(fermactor1(16));
console.log(fermactor1(15));
console.log(fermactor1(16));
