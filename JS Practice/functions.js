/*
'function keywokr <function name> ( <parameter /s) {
    <code block>
}
//to call a function:
    <function name>():{

    }

Benefits of Functions:
Reuseability


*/

function greet() {
    console.log("Hello, welcome to JS functions!")
}

greet();

//parameters and arguments
function add(num1, num2) {
    return num1 +num2;
}

let sum = add(3,5);
console.log(sum);

//multiple parameters and arguments
function fullName(firstName, lastName) {
    console.log(`Full name: ${firstName} Last name: ${lastName}`);
}

fullName('Jane', 'Carnes');

//function Expressions
let square = function(x){
    return x*x;
};

console.log(square(4));

//function Hoisting
//works for function declaration not function expression.
meet();

function meet(){
    console.log("Hey!");
};

// will not work
//meet = function meet(){
//    console.log("Hey!");
//};

//Anonymous Function
let anon = function(){
    console.log('This is an anonymous function.')
};

anon();

//=== Variables Scopes ===//

//Global Scope -- variables are accessible from anywhere in your code

let globalVar = 'I am a global variable.';

function accessVar(){
    console.log(globalVar);
}

accessVar();

//local scope -- variables are only accessible within a function or block
function accessVar2(){
    let localVar = 'I am a local variable.'
    console.log(localVar);
}

accessVar2();
//console.log(localVar); //will not work

//--- Nested Functions ---//
function outerFunction(){
    let outerVar = 'I am from the outer function.';

    function innerFunction(){
        console.log(outerVar);
    }
    innerFunction();
}

outerFunction();

//== Higher Order Functions (HOF)==//

/**
 * 1. Take functions as arguments
 * 2. Return a function or perfom operation on functions
 * 
 */

//function as an argument
function fName(name){
    console.log(`Hi ${name}!`)
}

function sayHi(greetingFunction){
    greetingFunction("Alice");
}

sayHi(fName); //fName('Alice')

//function as an argument
function applyOperation(x,y,operation){
    return operation(x,y)
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

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// function as a Return Value
function multiply(factor){
    return function(x){
        return x*factor;
    }
}

let double = multiply(2);
let triple = multiply(3);

console.log(double(5));
console.log(triple(5));

//-- Callback --//

function greet2(my_name, callback){
    console.log(`Hello ${my_name}`);
    callback();
}

function sayGoodbye(){
    console.log('Goodbye!');
}

greet2('Jan', sayGoodbye);
