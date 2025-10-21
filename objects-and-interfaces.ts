// Interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}


// Object declaration
const car: Car = {
    type: "Kia",
    model: "Sportage",
    color: "forest green",
    horsePower: 150,
};
//console.log(car);

// Interface person object
interface Person {
    name: string;
    laastName: string;
    address: string;
    age: number;
    hobbies: string[];
    greeting: () => string;
}

// Object with method and array-value
const person = {
    name: "Teodora",
    lastName: "Koleva",
    address: "ul. Vasil Levski 20",
    age: 30,
    hobbies: ["dance", "tennis", "hiking"],
    greeting: function () {
        return "Hello! My name is Teodora.";
    },
};
//console.log(person);

//properties access
person.name;
person.age;
person["address"];

person["greeting"]();
//console.log(person.greeting());

// properties redeclaration
person.age = 35;
//console.log(person);

// let vs const redeclaration
let dog = { name: "Spark" };
dog.name = "Toby";
dog = { name: "nik" };

const cat = { name: "Lusi", age: 10 };
cat.name = "Kitty";
// cat = {name: "Tom", age: 20}

// explicit object type
const mouse: { name: string, favFood: string, age: number } = {
    name: "Jerry",
    favFood: "cheese",
    age: 2,
};

// Interfaces - optional parameters, read and string literals

interface User {
    name: string;
    readonly email: string;
    role: string;
    //string literaly 
    //role: "user" | "admin" |"superadmin" |"superuser";
    // optional parameter
    job?: string;
    password?: string | number;
}

const user = {
    name: 'Tom',
    email: "tom@mail.com",
    role: "admin",
    password: 1502,
    job: 'QA',
};

// optional parameter added later
user.password = 5563236
console.log(user);

//cobining Interfaces

const secondUser = {
    name: 'Tom',
    email: "tom@mail.com",
    role: "admin",
    password: 1502,
    job: 'QA',
};

interface UserPermissions extends User {
    permissions: string;
}

const 
thirdUser: UserPermissions = {
    name: 'Tom',
    email: "tom@mail.com",
    role: "admin",
    password: 1502,
    job: 'QA',
    permissions: "denied",
};

