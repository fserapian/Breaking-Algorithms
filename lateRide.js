/****************** LATE RIDE ************************/
/*
    One night you go for a ride on your motorcycle. At 00:00 you start
    your engine, and the built-in timer automatically begins counting
    the length of your ride, in minutes.
    Off you go to explore the neighbourhood.

    When you finally decide to head back, you realise there's a chance
    the bridges on your route home are up, leaving you stranded!
    Unfortunately, you don't have your watch on you and don't know what
    time it is. All you know thanks to the bike's timer is that n minutes
    have passed since 00:00.

    Using the bike's timer, calculate the current time. Return an answer
    as the sum of digits that the digital timer in the format hh:mm would show.

    Example:
    For n = 240, lateRide(n) = 4.
    Since 240 minutes have passed, the current time is 04:00.
    The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.

    For n = 808, lateRide(n) = 14.
    808 minutes mean that it's 13:28 now, so the answer should be
    1 + 3 + 2 + 8 = 14.
 */

function lateRide(n) {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;

    return hours.toString().concat(minutes.toString()) // concat the hours and minutes
        .split('') // split the string into array of string numbers
        .map(str => parseInt(str)) // map the array to numbers
        .reduce((a, b) => a + b, 0); // reduce the numbers into the total
}

function lateRide1(n) {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;

    return (hours.toString() + minutes.toString())
        .split('')
        .map((str) => +str)
        .reduce((acc, n) => acc + n, 0);
}

// One liner
const lateRide2 = (n) => ((Math.floor(n / 60)).toString() + (n % 60).toString())
    .split('')
    .map((str) => +str)
    .reduce((acc, n) => acc + n, 0);

console.log(lateRide(240));
console.log(lateRide(808));

console.log(lateRide1(240));
console.log(lateRide1(808));

console.log(lateRide2(240));
console.log(lateRide2(808));
