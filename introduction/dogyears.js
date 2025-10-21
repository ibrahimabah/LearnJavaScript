let myAge = 26; // This variable stores my age in human years
let earlyYears = 2; // first two years of a dog's life
earlyYears *= 10.5; // converting early years to dog years

let laterYears = myAge - 2; // Subtract 2 from myAge to get the number of later years
laterYears *= 4; // converting later years to dog years
console.log(earlyYears); // prints 21

let myAgeInDogYears = earlyYears + laterYears; // total age in dog years
let myName = 'Ibrahim ibn Muhammad Alameen Telemele'.toLowerCase(); // your name in lowercase

console.log(`My name is ${myName}. I am ${myAge} in human years, which ${myAgeInDogYears} years old in dog years`); // printing the final statement using string interpolation
