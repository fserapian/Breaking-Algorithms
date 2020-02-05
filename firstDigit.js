/*********************** FIRST DIGIT ***********************/
/*
    Examples:
        For inputString = 'var_1__Int', firstDigit(inputString) = '1',
        For inputString = 'q2q-q', firstDigit(inputString) = '1',
        For inputString = '0ss', firstDigit(inputString) = '0',
*/

function firstDigit(str) {
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            return str[i];
        }
    }
}

const firstDigit1 = str => {
    let ans = '';
    str.split('').forEach(c => {
        if (!isNaN(parseInt(c))) {
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
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit1('var_1__Int'));
console.log(firstDigit2('0ss'));