 // logs things on the browsers console
console.log(1);
console.log(2);

// let assigns values to variables that can be changed later
let age = 25;
console.log(age);

let year = 2023;
console.log(age, year);

age = 30;
console.log(age);

// const assigns values to variables that cannot be changed
const points = 100;
console.log(points);

// var assigns values to variables
var score = 75;
console.log(score);

// variables can only start with '_', 'Aa', '$'
// commenting in JS
// 1. ctrl + /
// 2. //...
// 3. /*...*/


//Lesson II
// JavaScript Data Types
//Number, Strings, Boolean, Objects, Null, Undefined, Symbol

//strings
console.log('Hello Tina');

let email = 'esther@datascience.com';
console.log(email);

//string concatenation
let firstName = 'Esther';
let lastName = 'Alice';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//Extracting Characters from a string
console.log(fullName[0]);

//Getting string length
console.log(fullName.length);

//string methods and functions
// a functions is a snippet of code that performs a specific task
// a method is function associated with a particular object or data type

//method
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

// argument are values passed in a method
index = email.indexOf('@');
console.log(index);


//common string methods
result1 = email.lastIndexOf('e');
console.log(result1);


//slice a section from a string
result2 = email.slice(0, 10);
console.log(result2);

//substring extraction
let result3 = email.substring(4, 10);
console.log(result3);

//replace one with the other -- replaces the first letter it comes accross if there are several similar letters
let result4 = email.replace('@', '&');
console.log(result4);


//Numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//math operators +, -, *, /, **, %

console.log(10/2);

let result5 = radius % 3;
console.log(result5);

let circumference = pi * radius**2;
console.log(circumference);

//order of operations B I D M A S & B O D M A S
let result6 = 5 * (10-3)**2 + 5 - 10;
console.log(result6);

let likes = 10;

likes = likes + 1;

console.log(likes);


//shorthand for the above
likes++;
console.log(likes);

likes --;

likes += 10; 

likes *= 2;

likes /= 2;
console.log(likes);




