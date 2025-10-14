//let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMessage: string = 'Welcome!';
//Cannot assign to 'welcomeMessage' because it is a constant.
//welcomeMessage = 'Welcome, Petar!'

// string interpolation
let message: string = 'Hello, Petar!';
let messageLenght: number = message.length;
let welcomeMessageDetails: string = `Text message length is ${messageLenght}`;
//console.log(welcomeMessageDetails);

//number and number operations
let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let devide: number= numOne / numTwo;

//boolean (true/false)
let areEqual: boolean = numOne === numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;
//console.log("areEqual", areEqual);

//logical operators
let areEqualTo: boolean = numOne === 10 && numTwo ===5; //&& и
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo ===5; //|| или
//console.log("areEqualTo", areEqualTo);

// Conditions 

// ternary operator
//5 = 5 ? "true result" : "false result";- примери как се пише 
//"hello" === "hello" ? "true result" : "false result"; - примери как се пише  
let positiveNumComparison: string = numOne > 0 ? `The number ${numOne} is positive`: `The number ${numOne} is negative`;
//console.log(positiveNumComparison);

//if /else statement
const numThree: number = 100;
if(numThree <= 10) {
    console.log("The number is less or equal to 10");
}
else if (numThree > 110) {
    console.log("The number is greater than 110");
}
else if(numThree > 50) {
    console.log("The number is greater than 50");
}
else {
   console.log("numOne is not greater than 3"); 
}






