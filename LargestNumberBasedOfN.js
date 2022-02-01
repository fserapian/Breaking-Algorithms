/******************* LARGEST NUMBER BASED OF N *******************/
/*
    Example:
        For n = 2, largestNumber(n) = 99
 */

function largestNumber(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += '9';
    }
    return parseInt(str);
}

function largestNumber1(n) {
    const largestNumberString = '9'.repeat(n);
    return parseInt(largestNumberString);
}

// One liner
const largestNumber2 = (n) => parseInt('9'.repeat(n));

console.log(largestNumber(2));
console.log(largestNumber1(2));
console.log(largestNumber2(2));
console.log(largestNumber2(5));
