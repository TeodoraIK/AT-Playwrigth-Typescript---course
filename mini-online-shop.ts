//Steps 
//1.Create an interface Product with the following fields: 
//name: string  
//price: number  
//category: "food" | "clothes" | "electronics" 
//2.Create a type Category with the possible categories (food, clothes, electronics) 
//3.Create an interface Customer with the following fields: 
//name: string   
//email: string 
//cart: Product[] — an array containing the products in the customer’s cart 
//4. Create two example products (e.g., an apple and a T-shirt). 
//5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product{
    name: string;
    price: number;
    category: Category;
}

interface Customer {
    name: string;   
    email: string;
    cart: Product[];
}
const apple: Product = {name: "Apple", price: 2, category: "food"}; 
const tShirt: Product = {name: "T-Shirt", price:20, category: "clothes"};
const headphones: Product = {name: "headphones", price: 50, category: "electronics"}
const laptop: Product= {name: "laptop", price: 1000,category: "electronics"};

const product = [apple, tShirt, headphones,laptop];

const customer1: Customer = {
    name: 'Ivan Ivanov', 
    email: 'ivan@ivanov.com', 
    cart: [apple, laptop]
};

const customer2: Customer = {
    name: 'Tea Ivanova',
    email: 'tea@ivanova.com',
    cart: [tShirt, headphones]
};

function displayCart(customer: Customer) : void {
    console.log(`Cart for ${customer.name}:`);
    customer.cart.forEach((product) => {
console.log(`- ${product.name} (${product.category}): $${product.price}`)
    });
}
//add second customer + custom array with string product

//add function displayCart - display cart sustomer name and products
//add function filterByCategory - receive product and category as parameters and filter the products by given category
//addfunction calculate  total price- receive customer data and combine all products price
//customer.cart[0].price
//customer.cart[1].price
//....
//total = allPrice
export{};