/*************************** MAKE ARRAY CONSECUTIVE 2 *********************/
/*
    Ratiorg got statues of different sizes as a present from CodeMaster for
    his birthday, each statue having a none-negative integer size.
    Since he likes to make things perfect, he wants to arrange them
    from smallest to largest so that each statue will be bigger than
    the previous one exactly by 1.
    He may need additional statues to be able to accomplish that.
    Help him figure out the minimum number of additional statues needed.

    Example:
    For statues = [6, 2, 3, 8], the output should be
    makeArrayConsecutive2(statues) = 3.

    Ratiorg needs statues of sizes 4, 5 and 7.
 */

function makeArrayConsecutive2(statues) {
    let count = 0;
    const sorted = statues.sort((a, b) => a - b);

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] !== 1) {
            count += (sorted[i] - sorted[i - 1] - 1);
        }
    }
    return count;
}

// Better
function makeArrayConsecutive22(statues) {
    let count = 0;
    const sorted = statues.sort((a, b) => a - b);

    const min = sorted[0];
    const max = sorted[sorted.length - 1];

    for (let i = min; i < max; i++) {
        if (!statues.includes(i)) {      // if (statues.indexOf(i) === -1)
            count++;
        }
    }
    return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive22([6, 2, 3, 8]));
