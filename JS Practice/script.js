// VARIABLES

const my_name = "Aiman";
let my_age = 30;

console.log(my_name);
console.log(my_age);

/*
Multi-line
Comment
*/

//---Data Types---//

/* Primitive Data types - most basic data types in JS */

//Number
const my_num = 20;
let my_num2 = 90.8;

console.log("This is my number: ", my_num, my_num2);
console.log(typeof my_num);

//string
let first_name = "Jane";
console.log("This is a string: ", first_name);
console.log(typeof first_name);

//Boolean - True or false
let isStudent = true;
console.log("This is a Boolean: ", isStudent);
console.log(typeof isStudent);

//Undefined --- uninitialised or missing vaule
let myUndefinedVar = undefined;
console.log(myUndefinedVar);
console.log(typeof myUndefinedVar);

//Null --- Empty or untentional absence
const myNull = null;
console.log(myNull);
console.log(typeof myNull);

/**
 * Reference Data Type -- holds more complex data types
 */

//Objects -- represents a collection of key-value pairs enclosed in { }
let person = {
    name: "Jan",
    age: 30,
    city: 'New York'
};

console.log(person);

//Array -- represents an ordered list of values enclosed in [ ]
let numbers = [1, 2, 3, 4];

console.log(numbers);
console.log(numbers.length);

//Functions -- represents reuseable blocks of codes that can be invoke by name
function greet(name) {
    console.log("Hello " + name);
}

greet('Alice');

//Date
const today = new Date();
console.log(today);





