//JS Expressions

console.log("--- Arithmetic Expressions  --- ");
let result = 5+3*2; //11; using bodmas
console.log(result);


console.log("--- String Expressions --- ");
// [ + ] ==> string concatenation operator
console.log("Hello " + "World!")

let message = "Hello" + " " + "Alice!";
console.log(message);


console.log("--- Logical Expressions ---");
let a=7;
let b=5;

console.log((a>5) && (b<10)); //true; (7>5) && (5<10)


console.log("--- Assignment Expressions ---");
let x=10;
let y=5;

x=x+y; //update value of x by adding y
console.log(x);


console.log("--- Function Call Expressions ---");
//Function Definition
function greet(name) {
    return "Hi! I am " + name + "!";
}

//Function call
let intro = greet("Joseph"); //puting string Joseph to the function variable "name"
console.log(intro);

