function calculate(operator, num1, num2) {
    let answer = 0;
    // Check if either num1 or num2 is not a number(NaN)
    //if (isNaN(num1) || isNaN(num2)) { //0R
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log("You provided an invalid number. Only numbers are allowed.");
    return; // Exit the function early
    }
    
    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            // Check if dividing by zero
            if (num2 === 0) {
                console.log("Division by zero is not allowed.");
                return; // Exit the function early
            }
            answer = num1 / num2;
            break;
        default:
            console.log("You provided an invalid operator. Acceptable inputs: '+' (Addition), '-' (Subtraction), '*' (Multiplication), '/' (Division).");
            return; // Exit the function early for invalid operators
    }

    console.log(`The answer of ${num1} ${operator} ${num2} = ${answer}`); //equivalent of python's fString, to put variable placeholder inline of string
}

// Examples of usage
console.log("Usage of calculator: calculate(operator, number 1, number 2)");
console.log("Eg: calculate('*', 4, 12)");

// Test cases
calculate("+", 5, 3); // Should print: The answer of 5 + 3 = 8
calculate("-", 8, 2); // Should print: The answer of 8 - 2 = 6
calculate("*", 6, 4); // Should print: The answer of 6 * 4 = 24
calculate("/", 10, 2); // Should print: The answer of 10 / 2 = 5
calculate("/", 7, 0); // Should print: Division by zero is not allowed.
calculate("&", 5, 3); // Should print: You provided an invalid operator.
calculate("?", 5, "hello"); // Should print: You provided an invalid number.