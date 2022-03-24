/****** EXACTLY TWICE EXISTED NUMBERS NUMBER *******/
/*
    Return the count of numbers that are repeated exactly twice in the array
    Examples:
    exactlyTwiceNumber([3, 2, 5, 3, 5, 1, 8]) => returns 2
    2 and 5 are repeated twice in the array.

    exactlyTwiceNumber([4, 4, 4, 5, 8, 1]) => returns 0
    There isn't any number that is repeated exactly twice in the array
 */

function exactlyTwiceNumber(list) {
    const newArr = [];
    for (let i = 0; i < list.length; i++) {
        let count = 0;
        for (let j = 0; j < list.length; j++) {
            if (list[i] === list[j] && i !== j && !newArr.includes(list[i])) {
                count++;
            }
        }
        if (count === 1) {
            newArr.push(list[i]);
        }
    }
    return newArr.length;
}

function exactlyTwiceNumber1(list) {
    // const obj = {};

    // for (let i = 0; i < list.length; i++) {
    //  if (obj.hasOwnProperty(list[i])) {
    //      obj[list[i]] += 1;
    //  } else {
    //      obj[list[i]] = 1;
    //  }
    // }

    const obj = list.reduce((acc, el) => {
        if (el in acc) {
            acc[el] += 1;
        } else {
            acc[el] = 1;
        }

        return acc;
    }, {});

    const res = [];
    for (let key in obj) {
        if (obj[key] === 2) {
            res.push(key);
        }
    }
    return res.length;
}

console.log(exactlyTwiceNumber1([3, 2, 5, 3, 5, 1, 8]));
console.log(exactlyTwiceNumber1([4, 4, 4, 5, 8, 1]));
