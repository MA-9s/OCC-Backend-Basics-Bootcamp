/**
 * DESTRUCTURING -- simplifying extracting values from complex data structures; use it for cleaner and more readable code.
 * 
 * 
 */


// Destructuring from Arrays
let person = ['Alice', 30, 'Software Engineer'];

//traditional way of accessing each elements
// let names = person[0];
// let age = person[1];
// let job = person[2];

//new way (destructuring)
// const [name, age, job] = person;
// console.log(person);

//skipping elements
const[namee, , job] = person;
console.log(namee, job);

const numbers = [1, 2, 3, 4, 5];
const[first, second, , fourth] = numbers;

console.log(first); //1
console.log(second); //2
console.log(fourth); //4

//Destructuring Objects
/**
 * Objects --- can store various data types; used to represent a collection of key value pairs
 */

//object literals
let person2 = {
    fName: 'Aiman',
    age: 18,
    country: 'Autralia'
}

console.log(person2.fName)

//new way (Object destructuring)
const {fName, age} = person2;
console.log(fName);

//old way
const person3 = {
    name: 'Anu',
    agee: 20,
    city: 'Sydney'
}

const{name, agee} = person3;
console.log(name);
console.log(agee);

//--
const numberss = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 3
}

const{firstNum, secondNum, thirdNum, fourthNum} = numberss;
console.log(fourthNum); //undefined

//Destruturing with Default Values
const user = {
    name: 'Bob'
};

const{age1 = 25} = user;
console.log(age1);


// Nested objects
// let nestedObj = {
//     first_name : 'Alice',
//     age2: 25,
//     address : {
//         city: 'Wonderland',
//         country: 'Fairyland'
//     }

// };

//destructuring nested Object

//destructuring patteern should be defined before accessing the variables
// const {first_name, age2, address} = nestedObj

// console.log(first_name);
// console.log(address.city);
// console.log(address.country);

//or
// const {first_name, age2, address} = nestedObj;
// const {city, country} = address;

// console.log(city);
// console.log(country);


//default values in nested destructuring
let nestedObj = {
    first_name : 'Alice',
    age2: 25,
    address : {
        city: 'Wonderland',
        country: 'Fairyland'
    }

};

const {first_name, age2, address:  { city, country}, gender = 'Female' } = nestedObj;

// or
//const {city, country} = address;


console.log(nestedObj, gender)
console.log(gender);
console.log(city, country);