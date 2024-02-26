/* Conditional Statements --- allows us to make decisions in our code based on certain conditions
*/

// if statement -- if the conditional statement is true, it will run the code block, else it skips to the next statement

//if statement ---
let age = 20;
if(age>=18) {
    vote();
}

//if..else statement ---
if(age>=18) {
    console.log("You can now vote.");
} else{
    console.log("You cant vote.");
}

//if..else if..else statement ---

let temp=25;

if(temp<0) {
    console.log("Its freezing.");
} else if  (temp >= 0 && temp < 20) {
    console.log("Its a cool day.");
} else {
    console.log("Its a warm day.");
}

/*
switch..case statement

3 keywords:
    case : keyword for starting a case block
    break : keyword dor stopping the switch statement from running the next code
    default : keyword for running a code when theres no matching case found
*/

let day = "Tuesday";

switch(day) {
    case 'Monday':
        console.log("Its Monday! Start of week.");
        break;
    case 'Friday':
        console.log("Its Friday! End of week.");
        break;
    default :
        console.log("Its a regular day.");
        break;  
}

let num = 7;

switch(num) {
    case 1:
        console.log("The number is 1.");
        break;
    case 2:
        console.log("The number is 2.");
        break;
    case 3:
        console.log("The number is 3.");
        break;
    case 4:
        console.log("The number is 4.");
        break;
    default :
        console.log("The number is greater than 4.");
        break;  
}
