/********* CELSIUS TO FAHRENHEIT **********/
/*
    The algorithm to convert Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
    Write a function that converts a temperature in Celsius to Fahrenheit.
    Ex:
    console.log(celsiusToFahrenheit(-30)) = -22 
    console.log(celsiusToFahrenheit(-10)) = 14
    console.log(celsiusToFahrenheit(0)) = 32
*/

function celsiusToFahrenheit(celsius) {
    return (celsius * (9 / 5) + 32).toFixed(3);
}

console.log(celsiusToFahrenheit(31));
console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));