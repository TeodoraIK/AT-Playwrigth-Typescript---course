let arrayString: string[] = ['Octobe','November','December'];
arrayString.push('January')
console.log(arrayString);

let arrayNumber2: number[] = [15, 65, 54, 89];
arrayNumber2.shift();
console.log(arrayNumber2);

const arrayNums3: number[] = [1, 2, 3, 4, 5];
const devidedNumbers= arrayNums3.map((num: number) => num / 2);
console.log(arrayNums3);

let arrayNums4: number[] = [3, 7, 1, 9, 12, 4];
let filteredNumbers =arrayNums4.filter((num: number) => num > 5);
console.log(filteredNumbers);

let arrayNums5: number[] = [9, 3, 7, 2, 8, 5];
let sortedResult = arrayNums5.sort((a: number, b: number) => a-b);
console.log(sortedResult);

let arrayString2: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let extractedThree = arrayString2.slice(0,3);
console.log(extractedThree);

let arrayString3: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
let removedStrings = arrayString3.splice(1,2,);
console.log(removedStrings);

function findLargest(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

const largest = findLargest(12, 7, 19);
console.log("Най-голямото число:", largest);

function convertToCentimeters(inches: number = 10): number {
  return inches * 2.54;
}
const resultWithValue = convertToCentimeters(5);
console.log("Резултат с подаден параметър (5 инча):", resultWithValue);

const resultWithDefault = convertToCentimeters();
console.log("Резултат със стойност по подразбиране (10 инча):", resultWithDefault);

function calculateArea(width: number, height?: number): number {
  if (height === undefined) {
    return width * width;
  } else {
    return width * height;
  }
}
console.log("Площ на квадрат със страна 5:", calculateArea(5));         // 25
console.log("Площ на правоъгълник 5x10:", calculateArea(5, 10));       // 50
