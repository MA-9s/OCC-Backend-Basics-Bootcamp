
// JS Practice Exercises 03

// Task 1: Calculate Square with Arrow Functions
// Using arrow functions, create a function that calculates the square of a given number and logs the result to the console.

console.log(' ')
console.log('=== Task 1: Calculate Square with Arrow Functions ===')

const square = (x) => console.log(x*x);

// Run function from 1 - 7
square(1);
square(2);
square(3);
square(4);
square(5);
square(6);
square(7);


// Task 2: Create a Welcome Message with Template Literals
// Craft a welcome message using template literals, including the name and age of a person.

console.log(' ')
console.log('=== Task 2: Create a Welcome Message with Template Literals ===')

let name = 'John';
let age1 = 91;
let city = 'Kuala Lumpur'

let message = `Hello ${name}! Welcome to my JS Template Literals code. 
You are ${age1} years old!
You are living in ${city}.`;

console.log(message);



// Task 3: Extract First and Last Name with Destructuring
// Utilize destructuring to extract the first and last name from a person object and log them to the console.

console.log(' ')
console.log('=== Task 3: Extract First and Last Name with Destructuring ===')

let person1 = {
    firstName : 'Adam',
    lastName : 'Jones',
    age2: 45,
    address : {
        city2: 'Bangkok',
        country: 'Thailand'
    }
};

const {firstName, lastName, age2, address:  { city2, country}, gender = 'Male' } = person1;

console.log(firstName, lastName);


// Task 4: Merge Arrays with Spread Operator
// Employ the spread operator to merge two arrays into a single array.

console.log(' ')
console.log('=== Task 4: Merge Arrays with Spread Operator ===')

const array1 = [10, 8, 6];
const array2 = [5, 3, 1];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);


// Task 5: Rectangle Area with Default Parameters
// Create a function that calculates the area of a rectangle using default parameters.

console.log(' ')
console.log('=== Task 5: Rectangle Area with Default Parameters ===')

//default parameters
// Area of rectangle = Length x Breadth
const areaOfRec = (l = 2, b = 5) => l * b; //if l and/or b is not specified, default of a and b is 2 and 5 respectively

console.log(areaOfRec()); //returns 10
console.log(areaOfRec(8)); //returns 40
console.log(areaOfRec(8,6)); //returns 48


// Task 6: Class "Person" with Introduction Method
// Define a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

console.log(' ')
console.log('=== Task 6: Class "Person" with Introduction Method ===')

// Define the Person class
class person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Instantiate an object of the Person class
let newPerson = new person3("Edward", 30);

// Call the introduce method
newPerson.introduce(); // This will print: Hello, my name is John and I am 30 years old.


// Feel free to unleash your creativity and have fun with these tasks! Once you've completed the tasks, share your solutions and don't forget to push it on your GitHub repo! If you have any questions or encounter challenges, don't hesitate to ask for assistance. Happy coding!