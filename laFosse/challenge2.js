'use strict';
/* Assignment 2: write a function negativeNumbers which takes in an array of integers and adds together the negative numbers, and add comments*/

function negativeNumbers(arr) {
    // Write your code here.

    let sum = 0; // this stores the sum of negative numbers

    for (const number of arr) { // this loops through each number in the array
        if( number < 0) { // this checks if the current number is negative
            sum += number; // if it is negative it will add to the sum
        }
    }

    return sum; // this will return the final sum of the negative numbers
}

const numberArr = [15, 59, 59, -5, -5]; // examples of the numbers in the array
const total = negativeNumbers(numberArr); // calculating the final sum
console.log(total) //outputs the final sum in the array