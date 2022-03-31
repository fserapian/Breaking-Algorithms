/***************** DOMAIN TYPE ******************/
/*
    Ex: If we have an array with different domains
    const arr =
    ['en.wiki.com', 'codefights.com', 'happey.net', 'code.info', 'something'];

    domainType(arr) =
    ['commercial', 'commercial', 'network', 'information', 'other']
*/

function domainType(domains) {
    return domains.map((domain) => {
        if (domain.includes('com')) {
            return 'commercial';
        }

        if (domain.includes('org')) {
            return 'organization';
        }

        if (domain.includes('net')) {
            return 'network';
        }

        if (domain.includes('info')) {
            return 'information';
        }

        return 'other';
    });
}

function domainType1(domains) {
    return domains.map((domain) => {
        const parts = domain.split('.')
        const ext = parts[parts.length - 1];

        switch (ext) {
            case 'com':
                return 'commercial';
            case 'org':
                return 'organization';
            case 'net':
                return 'network';
            case 'info':
                return 'information';
            default:
                return 'other';
        }
    });
}

function domainType2(domains) {
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
        } else {
            domainTypes.push('other');
        }
    }

    return domainTypes;
}

const arr = ['en.wiki.com', 'codefights.com', 'happey.net', 'code.info', 'something'];
console.log(domainType(arr));
console.log(domainType1(arr));
console.log(domainType2(arr));
