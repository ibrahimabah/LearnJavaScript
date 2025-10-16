# Introduction to Learning JavaScript

Welcome to Introduction to JavaScript!

In this course, you will learn about JavaScript data types, built-in methods, and variables.
The Syllabus focuses on these key areas:
- Computer science
- Data science
- JavaScript
- Mobile development
- Web development

# Data Types
Data types
Preview: Docs Data types are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.
 are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are eight fundamental data types:

Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
BigInt: Any number, greater than 253-1 or less than -(253-1), with n appended to the number: 1234567890123456n.
String: Any grouping of characters on the keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
Boolean: This data type only has two possible values — either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value, though it has a different use than null. undefined means that a given value does not exist.
Symbol: A newer feature of the language, symbols are unique identifiers that are useful in more complex coding. No need to worry about these for now.
Object: Collections of related data.
The first seven of those types are considered primitive data types. They are the most basic data types in the language. Objects are more complex


# Arithmetic Operators
Basic arithmetic often comes in handy when programming.

An 
operator
Preview: Docs Loading link description
 is a character that performs a task in our code. JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

- Add: +
- Subtract: -
- Multiply: *
- Divide: /
- Remainder: %

The first four work as one might assume:
Examples:
console.log(26 + 3.5)   prints 29.5
console.log(2025 - 1969)    prints 56
console.log(65 / 240)   prints 0.2708333333333333
console.log(0.2708 * 100)   prints 27.08

Note that when we console.log(), the computer will evaluate the expression inside the parentheses and print that result to the console. If we wanted to print the characters 3 + 4, we would wrap them in quotes and print them as a string.

console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0

The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.



# String Concatenation
Operators
Preview: Docs An operator is a special character or series of characters that perform a task in JavaScript.
 aren’t just for numbers! When a + operator is used on two 
strings, it appends the right string to the left string:

    console.log('Hello' + 'World') prints HelloWorld
    console.log('Hello ' + 'World') prints Hello World

This process of appending one string to another is called concatenation. Notice in the second example that we made sure to include a space at the end of the first string. The computer will join the strings exactly, so we must include the space we want between the two strings.

# Properties 
All 
data types
Preview: Docs Loading link description
 have access to specific properties that are passed down to each instance. For example, every string instance has a property called 
length
Preview: Docs Calculates the total character count within a given string, including spaces and punctuation.
 that stores the number of characters in that string. We can retrieve property information by appending the string with a period and the property name.

 For example:
    console.log('Teaching the world how to code'.length) prints 30
    

The . is another operator! We call it the dot operator.

In the example above, the value saved to the length property is retrieved from the instance of the string. The program prints 30 to the console because string has 30 characters in it.

# Methods
Data types have access to specific methods that allow us to handle instances of that data type. JavaScript provides a number of string methods.

We call, or use these methods by appending an instance with:

a period (the dot operator)
the name of the method
opening and closing parentheses
    // Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

    // Use a string method to log the following string without whitespace at the beginning and end of it.
    console.log('    Remove whitespace   '.trim());

# Built-in Objects
In addition to console, there are other objects built into JavaScript.

    - console.log(Math.random() *100) generates a random number between 0 and 100
    - console.log(Math.floor(Math.random()*100)) prints a random whole number between 0 and 99
    - console.log(Math.ceil(43.8)) this method returns the smallest integer greater than or equal to the given number. In this case it prints 44
    - console.log(Number.isInteger(2017)) returns true if the argument is an integer, and false otherwise. In this case it prints true
    

# Review
Let’s take one more glance at the concepts we just learned:

- Data is printed, or logged, to the console, a panel that displays messages, with console.log().
- We can write single-line 
comments with // and multi-line comments between /* and */.
- There are eight fundamental 
data types
 in JavaScript: numbers, BigInts, 
strings, booleans, null, undefined, symbols, and 
objects.
- Numbers are any number without quotes. For example: 23.8879
Strings are characters wrapped in single or double quotes. For example: 'Sample String'
The built-in arithmetic 
operators include +, -, *, /, and %.
- Objects, including instances of data types, can have properties that store information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
- Objects, including instances of data types, can have 
methods that perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
- We can access properties and methods by using the . (dot operator).
- Built-in objects, including Math, are collections of methods and properties that JavaScript provides.
