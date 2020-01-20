/********** Basic Number Length *************/

/*
	Find length of a number without converting to string
	num = 1234, numberLength(num) = 4
*/

const number = 1234;

function numberLength(num) {
    let numLength = 0;

    while (parseInt(num) !== 0) {
        num /= 10;
        numLength++;
    }

    return numLength;
}

console.log(numberLength(number));