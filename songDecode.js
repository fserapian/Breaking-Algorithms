/************************** SONG DECODE ****************************/
/*
	Example:
		song = 'WEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB';

		songDecode(song) = 'WE ARE THE CHAMPIONS MY FRIEND'
 */

function songDecode(song) {
	const decodedArr = song.split('WUB');
	const filtered = decodedArr.filter(elem => elem !== '');
	return filtered.reduce((decodedSentence, word) => (decodedSentence + ' ' + word).trim(), '');
}

function songDecode1(song) {
	return song.split('WUB')
			.filter(elem => elem !== '')
			.join(' ');
}

function songDecode2(song) {
	return song.replace(/(WUB)+/g, ' ');
}

console.log(songDecode('WEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB'));
console.log(songDecode1('WEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB'));
console.log(songDecode2('WEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB'));
