
// JS Practice Exercises

// Exercise 1: Function Expression
// Create a function expression named add that takes two numbers as parameters and returns their sum. Call the function to add the 2 numbers, then log the result.

console.log(' ')
console.log('=== Exercise 1: Function Expression ===')

let a=4;
let b=7;

// Function expression named 'sum'
let sum = function(x,y){
    return x+y;
};

console.log(`Sum of ${a} and ${b}: ${sum(a,b)}`); // Output: 11

// Exercise 2: Find Max
// Declare a function named find Max that takes an array of numbers as a parameter and returns the maximum value in the array. Call the findMax function with your array of numbers and log the result to the console.

console.log(' ')
console.log('=== Exercise 2: Find Max ===')

let myArrayOfNumbers = [6, 3, 10, 2, 9, 7]; // Example array

function findMax(numbers) {
    let maxNumber = numbers[0]; // Setting maxNumber to the first element of the array

    numbers.forEach(function(number) {
        if (number > maxNumber) {
            maxNumber = number;  // Setting it as maxNumber if greater
        }
    });

    return maxNumber; // Return the maximum value found
}

let result = findMax(myArrayOfNumbers);
console.log(`Maximum number in the array [${myArrayOfNumbers}]: ${result}`); // It should print the maximum number in the array


// Exercise 3: Higher-Order Function
// Create a higher-order function called mathOperation that takes two numbers and a callback function as parameters. The callback function should perform a
// mathematical operation. Use this higher-order function to add, subtract, multiply, and divide two numbers.

console.log('')
console.log('=== Exercise 3: Higher-Order Function ===')

function applyOperation(x,y,callback){
    return callback(x,y)
}

function add(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
function times(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

let result1 = applyOperation(4,3,add);
let result2 = applyOperation(4,3,minus);
let result3 = applyOperation(4,3,times);
let result4 = applyOperation(4,3,divide);

console.log(result1); // Should log: 7
console.log(result2); // Should log: 1
console.log(result3); // Should log: 12
console.log(result4); // Should log: 1.333...

// ++ BONUS:
// Exercise 4: Function as a Parameter
// Write a function called applyFunction that takes a function and an array as parameters. It should apply the given function to each element of the array and return a new array with the results.

console.log(' ')
console.log('=== Exercise 4: Function as a Parameter ===')

// Functions to check if a number is even and odd
function isEven(num) {
    return num % 2 === 0; // returns true or false; (returns true if divisible by 2, hence even)
}

function isOdd(num) {
    return num % 2 !== 0; // returns true or false; (returns true if NOT divisible by 2, hence odd)
}

// Function to apply another function to each element in the array
function applyFunction(array, operation) {
    let newArray = [];  // The new array of numbers to apply the `operation` function to
    array.forEach(function(number) {
        if (operation(number)) { // applying operation to if statement; if true, runs code
            newArray.push(number);
        }
    });
    return newArray;
}

let myLongListArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(`The array to applyFunction: [${myLongListArray}]`);

// Using applyFunction to filter even numbers
let newEvenArray = applyFunction(myLongListArray, isEven);
console.log(`The new array after filtering even numbers function: [${newEvenArray}]`);

// Using applyFunction to filter even numbers
let newOddArray = applyFunction(myLongListArray, isOdd);
console.log(`The new array after filtering odd numbers function: [${newOddArray}]`);


// Exercise 5: Callback Functions
// Create a function getUserData that simulates fetching user data from a server. It should accept a callback function as a parameter. Call the callback function with a user object once the data is retrieved.

console.log(' ')
console.log('=== Exercise 5: Callback Functions ===')

let serverData = [
    ["apple", 3, 5], 
    ["banana", 5, 4], 
    ["corn", 9, 3], 
    ["dragonfruit", 6, 9]
]  //data from server--- arrayception of fruits stock [item, amount, cost]

// Function to simulate fetching fruit stock data
function getFruitData(callback) {
    // Loop through each fruit in the serverData array
    serverData.forEach(function(fruitData, index) {
        // Call the callback function with each fruit data
        callback(fruitData, index + 1); // Adding 1 to index for 1-based numbering from array 0-based
    });
}

// Callback function to process the retrieved fruit data
function processFruitData(fruitData, itemNumber) {
    let [item, amount, cost] = fruitData;
    let totalCost = amount * cost;

    //Printing item #, item name, amount, cost and total cost
    console.log(`Retrieved Fruit Data #${itemNumber}:`);
    console.log("Item:", item);
    console.log("Amount:", amount);
    console.log("Cost per item: $", cost);
    console.log("Total Cost: $", totalCost);
    console.log("--------------------"); // Separator between fruit items
}

// Call getFruitData with the processFruitData callback
getFruitData(processFruitData);