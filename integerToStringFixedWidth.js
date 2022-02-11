/***************** INTEGER TO STRING OF FIXED WIDTH *******************/
/*
 * Given a positive integer number and a certain length, we need to modify the given number
 * to have a specified length. We are allowed to do that either by cutting out leading digits
 * (if the number needs to be shortened) or by adding 0s in front of the original number.
 *
 * Example:
 * For number = 1234 and width = 2, integerToStringOfFixedWidth(number, width) = '34'
 * For number = 1234 and width = 4, integerToStringOfFixedWidth(number, width) = '1234'
 * For number = 1234 and width = 5, integerToStringOfFixedWidth(number, width) = '01234'
 */

function integerToStringOfFixedWidth(number, width) {
        const numString = number.toString();
        const numberWidth = numString.length;

        const zerosToAdd = width - numberWidth;
        const diff = Math.abs(zerosToAdd);

        let resString = '';

        if (zerosToAdd > 0) {
                for (let i = 0; i < zerosToAdd; i++) {
                        resString += '0';
                }
                resString += numString;
        } else {
                for (let i = diff; i < numberWidth; i++) {
                        resString += numString[i];
                }
        }

        return resString;
}

// Better
function integerToStringOfFixedWidth1(number, width) {
    const numStr = number.toString();
    const numLength = numStr.length;
    const diff = numLength - width;

    let res = '';

    if (diff === 0) {
        return numStr;
    }

    if (diff > 0) {
        for (let i = diff; i < numLength; i++) {
            res += numStr[i];
        }
    } else {
        const n = Math.abs(diff);
        res += '0'.repeat(n) + numStr;
    }

    return res;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
console.log('----------------------------------');
console.log(integerToStringOfFixedWidth1(1234, 2));
console.log(integerToStringOfFixedWidth1(1234, 4));
console.log(integerToStringOfFixedWidth1(1234, 5));
