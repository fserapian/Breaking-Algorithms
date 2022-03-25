/************** EVEN DIGITS ONLY *****************/
/*
    Check if all digits of the given integer are even

    Ex:
        For n = 24682, evenDigitsOnly(n) = true;
        For n = 68423, evenDigitsOnly(n) = false;
*/

function evenDigitsOnly(number) {
    const strArr = number.toString().split('');

    let isEven = true;
    strArr.forEach((strNum) => {
        if (parseInt(strNum) % 2 !== 0) {
            isEven = false;
        }
    });

    return isEven;
}

function evenDigitsOnly1(num) {
    const strArr = num.toString().split('');

    for (let i = 0; i < strArr.length; i++) {
        if (parseInt(strArr[i]) % 2 !== 0) {
            return false;
        }
    }

    return true;
}

function evenDigitsOnly2(num) {
    const strArr = num.toString().split('');
    return strArr.every((strNum) => parseInt(strNum) % 2 === 0);
}

// One line
const evenDigitsOnly3 = (num) => num.toString().split('').every((el) => +el % 2 === 0);

console.log(evenDigitsOnly(44646228));
console.log(evenDigitsOnly1(44646228));
console.log(evenDigitsOnly2(44646228));
console.log(evenDigitsOnly3(44646228));
