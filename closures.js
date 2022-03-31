/******************* CLOSURES **********************/
/*
    1. Create a counter function which has increment and getValue functionality.
    2. Create a function with a secret string and return when calling the function again.
 */

// With an object
// const counter = {
//     value: 0,
//     increment() {
//         this.value++;
//         return true;
//     },
//     getValue() {
//         return this.value;
//     }
// };

const privateCounter = () => {
    let count = 0;

    return {
        increment(value = 1) {
            count += value
        },
        getValue() {
            return count;
        },
    };
};

const counter = privateCounter();
console.log(counter.getValue());
counter.increment(10);
console.log(counter.getValue());

const privateSecret = () => {
    const secret = 'THE SECRET';

    return () => secret;
};

const getSecret = privateSecret();
console.log(getSecret());
