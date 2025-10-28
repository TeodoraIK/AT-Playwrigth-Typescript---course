interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

const person1: Person = {
    name: 'Ivan',
    lastName: 'Ivanov',
    age: 30,
    email: 'ivan@ivanov.com',
    phoneNumber: +359888111222,
};

const person2: PersonInfo = {
    name: 'Ivan',
    lastName: 'Ivanov',
    age: 30,
    email: 'ivan@ivanov.com',
    phoneNumber: +359888111222,
    country: "Bulgaria" ,
    greeting: () => `Добре дошъл, ${person2.name} ${person2.lastName}!`,
};

console.log(person2.greeting?.());