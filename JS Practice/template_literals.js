/**
 * 
 * TEMPLATE LITERALS
 * 
 *  -- uses ( ` ) backticks instead of single / double quotes
 * 
 * -- uses ${ } to insert variables or expressions directly into the string
 *  
 */

// old way (string concatenations)
let name = 'John';
let age = 25;

console.log('Hi, I am ' + name + '. I am ' + age + ' years of age');

// new way [f`{ }`]
console.log(`Hi, I am ${name}, I am ${age} years of age.`);

// old way (multiline string)
let message = 'This is a \nlong message and it \nspans \multiple lines';
console.log(message);

//Multiline string
const multilineString = `This is a multiline string
    It allows you to break lines
    without concatenation.
`;
console.log(multilineString);

//Expression Interpolation
const a = 5;
const b = 10;

const result = `The sun of ${a} and ${b} is ${a+b}`
console.log(result);

//function calling
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}

let firstName = 'Alice';
let lastName = 'Smith';
console.log(`Hello ~ ${fullName(firstName, lastName)}`);


