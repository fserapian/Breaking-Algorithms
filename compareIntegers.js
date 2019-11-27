/********** COMPARE INTEGERS ************/
/**
 * Compare two integers given as strings
 * 
 * Examples:
 * For a = '12' and b = '13', compareIntegers(a, b) = 'Less'.
 * For a = '45' and b = '4', compareIntegers(a, b) = 'Greater'.
 * For a = '77' and b = '77', compareIntegers(a, b) = 'Equal'.
 */

function compareIntegers(a, b) {
    if (parseInt(a) < parseInt(b)) {
        return 'Less';
    } else if (parseInt(a) > parseInt(b)) {
        return 'Greater';
    } else {
        return 'Equal';
    }
}

// Shorter Solution
function compareIntegers2(a, b) {
    return parseInt(a) < parseInt(b) ? 'Less' : parseInt(a) > parseInt(b) ? 'Greater' : 'Equal';
}

console.log(compareIntegers('5', '8'));
console.log(compareIntegers2('5', '8'));