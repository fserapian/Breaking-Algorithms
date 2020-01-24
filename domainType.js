/***************** DOMAIN TYPE ******************/
/*
	Ex: If we have an array with different domains
	const arr = 
	['en.wiki.com', 'codefights.com', 'happey.net', 'code.info'];

	domainType(arr) =
	['commercial', 'commercial', 'network', 'information']
*/

function domainType(domains) {
	return domains.map(domain => {
		if (domain.includes('com')) {
			return 'commercial';
		} else if (domain.includes('org')) {
			return 'organization';
		} else if (domain.includes('net')) {
			return 'network';
		} else if (domain.includes('info')) {
			return 'information';
		}
	})
}

function domainType1(domains) {
	const domainTypes = [];

	for (let i = 0; i < domains.length; i++) {
		const parts = domains[i].split('.');
		const ext = parts[parts.length - 1];

		if (ext === 'com') {
			domainTypes.push('commercial');
		} else if (ext === 'org') {
			domainTypes.push('organization');
		} else if (ext === 'net') {
			domainTypes.push('network');
		} else if (ext === 'info') {
			domainTypes.push('information');
		}
	}

	return domainTypes;
}

const arr = ['en.wiki.com', 'codefights.com', 'happey.net', 'code.info'];
console.log(domainType1(arr));

