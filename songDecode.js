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
	return song.replace(/(WUB)+/g, ' ').trim();
}

console.log(songDecode('WUBWEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB'));
console.log(songDecode1('WUBWEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB'));
console.log(songDecode2('WUBWEWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONSWUBWUB'));
