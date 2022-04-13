/******** CONVERT STRING ********/
/*
    You are given the string s. Your friend just asked you if it's possible
    to change the string from (s) to a string (t) by removing some characters from it.
    You're a pro at programming, so you decided to create a program to determine this.

    Example:
    For s = 'fahasdFdCdodseifigdhsts', t = 'Codefights', convertString(s, t) = true.

    For s = 'addbya', t = 'abcd', convertString(s, t) = false.
*/

function convertString(s, t) {
    let str = '';
    let tIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[tIndex]) {
            str += s[i];
            tIndex++;

            if (str === t) {
                return true;
            }
        }
    }

    return false;
}

console.log(convertString('fahasdFdCdodseifigdhsts', 'Codefights'));
console.log(convertString('addbya', 'abcd'));
