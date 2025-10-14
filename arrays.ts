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
console.log(checkTypeOf);




