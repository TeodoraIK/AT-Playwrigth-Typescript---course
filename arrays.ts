// arrays declaration
let arrayNums: number[] = [1,2,3,4];
let stringArray: string[] = ['Pesho','Gosho', 'Misho', 'Ivan'];
let combinedArray: (string| number)[] = [1, 'Pesho','Ivan', 2];

// access element by index
stringArray[0] //Pesho
stringArray[1] //Gosho
stringArray[2] //Ivan

//console.log(combinedArray[2]);

//access array lenght
arrayNums.length;

// method map 
let multiplyNums= arrayNums.map((num: number) => num * 2);
let mapNames = stringArray.map((currentName: string) => `Hello ${currentName}`);
let checkTypeOf = combinedArray.map((element: number | string) => {
if (typeof element === 'number') {
    return element + 5;
}
else {
    return `Welcome ${element}`;
}
});
//console.log(checkTypeOf);


//method filter
let positiveNums: number[] =[2,3,4,5,6];
let filteredArr: number [] = positiveNums.filter((num: number) => num > 4)
//console.log("filteedArr", filteredArr);

//method sort()
let sortNums: number[] = [100, 2 , 30, 5, 40, 6];
let sortedResult = sortNums.sort((a: number, b: number) => a-b);
//console.log(sortedResult);


//method push() - add element 
sortedResult.push(200);
//console.log(sortedResult);

//method pop() - remove element from the last 
sortedResult.pop();
//console.log(sortedResult);

//method shift() - remove first element (0 index)
sortedResult.shift();
//console.log(sortedResult);

//method unshift() - add first element 
sortedResult.unshift(1);
console.log(sortedResult);