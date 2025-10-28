//functions
function displayPersonalData(name, age) {
    return "".concat(name, " is ").concat(age, " years old.");
}
//console.log(displayPersonalData("Ivan", 22));
var personalData = displayPersonalData("Peter", 25);
//console.log(personalData);
//функция която не връща стойност 
function greetingVoid() {
    console.log("This function is type void");
}
function devideNums(numOne, numTwo) {
    return numOne / numTwo;
}
devideNums(10, 5);
devideNums(50, 5);
devideNums(100, 5);
//arrow function - expression
var sumNums = function (a, b) { return a + b; };
sumNums(3, 2);
//optional parameters
function greeting(name, age) {
    if (age) {
        return "".concat(name, " is ").concat(age, " years old.");
    }
    return "Hi I am ".concat(name);
}
//console.log(greeting("Todor"));
//greeting("Todor");
//console.log(greeting("Miroslav", 20));
//default parameters
function substractNums(numOne, numTwo) {
    if (numOne === void 0) { numOne = 10; }
    if (numTwo === void 0) { numTwo = 5; }
    //console.log(numOne - numTwo);
}
substractNums(50);
substractNums(50, 30);
// Function with union parameter of union type
function printId(id) {
    console.log("Id - ".concat(id, " is type of ").concat(typeof id));
}
printId("#10");
printId(10);
