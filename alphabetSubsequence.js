// return true if str is an alphabet sequence
// ex: 'acf' === true
// ex: 'accfg' === false
// ex: 'cdai' === false

// function alphabetSubsequence(str) {

// 	const codeArr = str.split('')
// 						.map(letter => letter.charCodeAt(0));

// 	let isIncreading = true;
// 	for (let i = 0; i < codeArr.length - 1; i++) {
// 		if (codeArr[i + 1] <= codeArr[i]) {
// 			isIncreading = false;
// 			break;
// 		}
// 	}
// 	return isIncreading;

// }

function alphabetSubsequence(str) {

	const codeArr = str.split('')
						.map(letter => letter.charCodeAt(0));

	for (let i = 0; i < codeArr.length - 1; i++) {
		if (codeArr[i + 1] <= codeArr[i]) {
			return false;
		}
	}
	return true;

}


console.log(alphabetSubsequence('abczza'));













