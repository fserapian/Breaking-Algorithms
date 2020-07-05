/************************** SONG DECODE ****************************/
/*
	Example:
		str = 'WEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB';

		songDecode(str) = 'WE ARE THE CHAMPIONS MY FRIEND'
 */

function songDecode(str) {
	const decodedArr = str.split('WUB');
	const filtered = decodedArr.filter(elem => elem !== '');
	return filtered.reduce((decodedSentence, word) => decodedSentence + ' ' + word, '');
}

function songDecode1(str) {
	return str.split('WUB')
			.filter(elem => elem !== '')
			.join(' ');
}

console.log(songDecode1('WEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB'));
