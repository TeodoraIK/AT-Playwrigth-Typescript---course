//console.log("A");
//console.log("B");
//console.log("C");

//Basic async operation
//console.log("Start");
//setTimeout(() => {
    //console.log("Async operation");
//}, 1000);

//console.log("End");

//multiple async operation
function setTimeouts() {
    setTimeout(() => {
    console.log("3 second delay");
}, 3000);
setTimeout(() => {
    console.log("1 second delay");
}, 1000);
setTimeout(() => {
    console.log("2 second delay");
}, 2000);
}
//setTimeouts();

//Async/Await syntax
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
    await delay(2000);
    console.log("2 second delay");

    await delay(3000);
    console.log("3 second delay");

    await delay(1000);
    console.log("1 second delay");
}
//demo();

// get product data

interface Rating{
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

async function getData(): Promise<Product> {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data: Product = await response.json()
    return data;

    console.log(`Title: ${data.title}`);
    console.log(`Price: ${data.price}`);
    console.log(`Category: ${data.category}`);
}
getData();

//try catch finally
try{
const jasonData =  JSON.parse('("valid: true")');
console.log(jasonData);
} catch (err) {
console.error(err)
} finally {
    console.log ("JSON parser ready");
}
