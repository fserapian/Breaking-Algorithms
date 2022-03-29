/************ ENCLOSE IN BRACKETS ************/

/*
    Given a string, enclose it in round brackets
*/

function encloseInBrackets(str) {
    const strArr = str.split('');
    strArr.push(')')
    strArr.unshift('(');
    return strArr.join('');
}

function encloseInBrackets1(str) {
    return `(${str})`;
}

function encloseInBrackets2(str) {
    return '('.concat(str).concat(')');
}

function encloseInBrackets3(str) {
    return '(' + str + ')';
}

console.log(encloseInBrackets('Fadi'));
console.log(encloseInBrackets1('Fadi'));
console.log(encloseInBrackets2('Fadi'));
console.log(encloseInBrackets3('Fadi'));
