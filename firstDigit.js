/*********************** FIRST DIGIT ***********************/
/*
    Examples:
        For inputString = 'var_1__Int', firstDigit(inputString) = '1',
        For inputString = 'q2q-q', firstDigit(inputString) = '1',
        For inputString = '0ss', firstDigit(inputString) = '0',
        For inputString = 'word', firstDigit(inputString) = null,
*/

function firstDigit(str) {
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            return str[i];
        }
    }

    return null;
}

const firstDigit1 = (str) => {
    let ans = null;

    str.split('').forEach((c) => {
        if (! isNaN(+c)) {
            ans = c;
        }
    });

    return ans;
};

function firstDigit2(str) {
    const decimals = '1234567890';

    for (let i = 0; i < str.length; i++) {
        if (decimals.includes(str[i])) {
            return str[i];
        }
    }

    return null;
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit1('var_1__Int'));
console.log(firstDigit2('var_1__Int'));
console.log(firstDigit('0ss'));
console.log(firstDigit1('0ss'));
console.log(firstDigit2('0ss'));
console.log(firstDigit('word'));
console.log(firstDigit1('word'));
console.log(firstDigit2('word'));
