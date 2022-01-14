/****************** LAUNCH SEQUENCE CHECKER ***************************/
/*
    The master launch sequence consists of several independent squences for different systems.
    You goal is to verify that all the individual system sequences are in strictly increasing order.
    In other words, for any two elements i and j (i < j) of the master launch sequence that belong
    to the same system (having systemNames[i] = systemNames[j]), their values should be in strictly
    increasing order (i.e. stepNumbers[i] < stepNumbers[j]).

    Example:
    For systemNames = ['one', 'two', 'two', 'one'], and stepNumbers = [1, 3, 2, 4]
    launchSequenceChecker(systemNames, stepNumbers) = false;

    There are two independent sequences for systems 'one' and 'two'
    These sequences are [1, 4] and [3, 2], respectively. In the second sequence,
    The elements are not ordered properly.
 */

function launchSequenceChecker(systemNames, stepNumbers) {
    const obj = {};

    for (let i = 0; i < systemNames.length; i++) {
        if (obj.hasOwnProperty(systemNames[i])) {
            if (obj[systemNames[i]] >= stepNumbers[i]) {
                return false;
            }
            obj[systemNames[i]] = stepNumbers[i];
        } else {
            obj[systemNames[i]] = stepNumbers[i];
        }
    }

    return true;
}

console.log(launchSequenceChecker(['one', 'two', 'two', 'one'], [1, 3, 2, 4]));
console.log(launchSequenceChecker(['one', 'two', 'two', 'one'], [1, 2, 3, 4]));
