// Converting Kelvin to Celsius, and then to Fahrenheit
const kelvin = 293; // const variable with number
let celsius = kelvin - 273; // celsius is 273 less than kelvin
let fahrenheit = celsius *(9/5) + 32; // calculating fahrenheit

fahrenheit = Math.floor(fahrenheit); // removing decimal places

console.log(`The temperature is  ${fahrenheit} degrees fahrenheit`); // printing the temperature in fahrenheit using string interpolation

// Celsius to newton conversion
let newton = celsius *(33/100); // calculating newton
newton = Math.floor(newton); // removing decimal places

console.log(`The temperature is  ${newton} degrees newton`); // printing the temperature in newton using string interpolation






