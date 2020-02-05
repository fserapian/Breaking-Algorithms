/********************* FIND EMAIL DOMAIN ***********************/
/*
    An email address such as "John.Smith@example.com" is made up of a local part ("John Smith"),
    an "@" symbol, then a domain part ("@example.com")

    The domain name part of an email address may only consist of letters, digits, hyphens and dots.
    The local part, however, also allows a lot of different special characters.

    Here you can look at several examples of correct and incorrect email addresses.

    Given an email address, find its domain part.

    Example:
        For address = "prettyandsimple@email.com", findEmailDomain(address) = "email.com"
        For address = "prett@ya@nd[si*mple@example.org", findEmailDomain(address) = "example.org"
*/

function findEmailDomain(address) {
    const atIndex = address.lastIndexOf('@');
    return address.substr(atIndex);
    // return address.slice(atIndex);
}

// In one line
const findEmailDomain1 = address => address.substr(address.lastIndexOf('@'));


console.log(findEmailDomain('fad@8f@i.serapian@gmail.com'));
console.log(findEmailDomain1('fad@8f@i.serapian@gmail.com'));
