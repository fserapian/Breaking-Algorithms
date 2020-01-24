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

console.log(encloseInBrackets2('Fadi'));