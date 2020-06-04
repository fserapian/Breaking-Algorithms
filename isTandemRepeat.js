/**************************** IS TANDEM REPEAT **************************/
/*
	Determine wether the given string can be obtained by one concatenation
	of some string to itself.

	For inputString = 'tandemtandem', isTandemRepeat(inputString) = true,
	For inputString = 'qqq', isTandemRepeat(inputString) = false,
	For inputString = '2w2ww', isTandemRepeat(inputString) = false
 */

function isTandemRepeat(inputString) {
	if (inputString.length % 2 !== 0) {
		return false;
	}

	const strLength = inputString.length;
	const firstPart = inputString.slice(0, strLength / 2);
	const secondPart = inputString.slice(strLength / 2);

	return firstPart === secondPart;
}

const str = 'thetruththetrutg';
console.log(isTandemRepeat(str));