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
        for (let i = 0; i < nested.length; i++) {
            const el = nested[i];

            if (Array.isArray(el)) {
                flatten(el);
            } else {
                flattened.push(el);
            }
        }
    }

    return flattened;
}

// With flat function
function flattenArray1(nested) {
    return nested.flat(Infinity);
}

console.log(flattenArray([1, 3, [[[5]]]]));
console.log(flattenArray([[['a']], [['b']]]));
console.log(flattenArray1([1, 3, [[[5]]]]));
console.log(flattenArray1([[['a']], [['b']]]));
