/****************** IS CASE INSENSITIVE PALINDROME **********************/
/*
    Given a string, check if it can become a palindrome through a case change
    of some (possibly, none) letters.
    Ex: For str = 'AaBaa' isCaseInsensitivePalindrome(str) = true.
        For str = 'abac' isCaseInsensitivePalindrome(str) = false.
*/

function isCaseInsensitivePalindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    for (let i = 0; i < lowerCaseStr.length / 2; i++) {
        if (lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function isCaseInsensitivePalindrome1(str) {
    const strToLower = str.toLowerCase();
    return strToLower === strToLower.split('').reverse().join('');
}

// One liner
const isCaseInsensitivePalindrome2 = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

console.log(isCaseInsensitivePalindrome('fafe'));
console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log('----------------------------------');
console.log(isCaseInsensitivePalindrome1('fafe'));
console.log(isCaseInsensitivePalindrome1('AaBaa'));
console.log(isCaseInsensitivePalindrome1('abac'));
console.log('----------------------------------');
console.log(isCaseInsensitivePalindrome2('fafe'));
console.log(isCaseInsensitivePalindrome2('AaBaa'));
console.log(isCaseInsensitivePalindrome2('abac'));
