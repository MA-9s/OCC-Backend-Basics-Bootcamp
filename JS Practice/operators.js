//Arithmetic Operators

/*
(+), (-), (*), (/)
*/

let num1 = 21;
let num2 = 10;

//Addition
let sum = num1 + num2;
console.log(`Sum is ${sum}`);

//Subtration
let diff = num1 - num2;
console.log(`Difference is ${diff}`);

//Multiplication
let product = num1 * num2;
console.log(`Product is ${product}`);

//Division
let quotient = num1 / num2;
console.log(`Quotient is ${quotient}`);

//Modulor
let mod = num1 % num2;
console.log(`Remainder is ${mod}`);

/**
 * Assignment Operator
 * (=), (+=), (-=), (*=), (/=)
 */

let equals = "This value";

//Addition Assignment (+=)
let a = 5;
a += 5; // a = a + 5

console.log(a);

//Subtraction Assignment (-=)
let b = 5;
b -= 5; // b = b - 5

console.log(b);

//Multiplication Assignment (*=)
let c = 5;
c *= 5; // c = c * 5

console.log(c);

//Division Assignment (/=)
let d = 5;
d /= 5; // d = d / 5

console.log(d);


/**
 * Comparision Operators -- retuns Boolean values (true or false)
 * 
 * Greater than ( > )
 * Less than ( < )
 * Less than or equal to ( <= )
 * Greater than or equal to ( >= )
 * Equal to ( == ) ---> loose equality; checks if it has the same value, disregards data types
 * Strict Equal to ( === ) ---> checks not just value, but also the data type
 * Not Equal to ( != )
 */

//Greater than
console.log(9>10); //false
console.log(10<20); //true
console.log(15<=30); //true
console.log(20>=50); //false
console.log('5'==5); //true
console.log('5'===5); //false
console.log(9!=20); //true

/**
 * Logical Operators --- Combine boolean values and logical operators to evaluate conditions
 * 
 * AND (&&) OR ( || ) NOT (!)
 */

//AND ( && ) --- returns true if both conditions are true
console.log("AND ( && ) ", true && false) //false

//OR ( || ) --- returns true if atleast one of the conditions on its left or right is true.
console.log("OR ( || ) ", false || true) //true

//NOT (!) --- returns true if atleast one of the conditions on its left or right is true.
console.log("NOT (!) ", !true) //false

/**
 * Unary Operators
 * increment (++), decrement (--)
 */

let x = 10;
x++; //x+1
console.log(x); //11 ; 11 is new value

x--; //x-1 ++> 11-1
console.log(x) //10

/**
 * Ternary Operator --- single condition statement in a single line; take 3 operands and returns a value based on a condition
 * 
 * condition ? expression if true : expression if false
 */

let age = 20;

let message =  (age>=18) ? "You are of legal age" : "You are a minor."; 
console.log(message); //"You are of legal age"


