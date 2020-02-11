/******************* FLATTEN ARRAY *******************/
/*
    Flatten a nested array. You must account for varying levels of nesting.

    Examples:
        flattenArray([1, 3, [[[5]]]]) => [1, 3, 5]
        flattenArray([[['a']], [['b']]]) => ['a', 'b']
*/

function flattenArray(nested) {
    const flattened = [];

    flatten(nested);

    function flatten(nested) {
        nested.forEach(elem => {
            if (Array.isArray(elem)) {
                flatten(elem);
            } else {
                flattened.push(elem);
            }
        });
    }

    return flattened;
}

// function flattenArray(nested) {
//     return nested.flat(Number.MAX_SAFE_INTEGER);
// }

console.log(flattenArray([1, 3, [[[5]]]]));
console.log(flattenArray([[['a']], [['b']]]));

