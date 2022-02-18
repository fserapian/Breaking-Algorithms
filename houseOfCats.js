/*************************** HOUSE OF CATS *****************************/
/*
    There are some people and cats in a house. You are given the numbers of legs
    they have all together. Your task is to return an array containing every possible
    number of people that could be in the house sorted in ascending order.
    It's guaranteed that each person has 2 legs and each cat has 4 legs.

    Example:

    For legs = 6, houseOfCats(legs) = [1, 3]
    There could be either 1 cat and 1 person (4 + 2 = 6)
    or 3 people (2 * 3 = 6)

    For legs = 2, houseOfCats(legs) = [1]
    There can be only 1 person.
*/

function houseOfCats(legs) {
    let peopleNumbers = [];

    while (legs > 0) {
        peopleNumbers.unshift(legs / 2);
        legs -= 4;
    }

    return peopleNumbers;
}


console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(10));
console.log(houseOfCats(4));
