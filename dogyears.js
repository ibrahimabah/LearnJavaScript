let myAge = 26; // your age in years
let earlyYears = 2; // first two years of a dog's life
earlyYears *= 10.5; // converting early years to dog years

let laterYears = myAge - 2; // remaining years after the first two
laterYears *= 4; // converting later years to dog years
console.log(earlyYears); // prints 21

let myAgeInDogYears = earlyYears + laterYears; // total age in dog years
let myName = 'Ibrahim ibn Muhammad Alameen Telemele'.toLowerCase(); // your name in lowercase

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years`); // printing the final statement using string interpolation
