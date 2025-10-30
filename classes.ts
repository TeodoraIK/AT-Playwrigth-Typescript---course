// class declaration

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
this.name = name;
this.age = age;
    }

    intoduction():void {console
        .log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Ivan",20);
person1.intoduction();
person1.name;
console.log("person1.name", person1.name);
person1.age;

// readonly access modifier

class ReadonlyPersonData {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
this.name = name;
this.age = age;
    }

    intro(): void {
       console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}
const person2 = new ReadonlyPersonData("Todor", 25);
person2.age;
console.log("person2.name", person2.age);
person2.name;
console.log("person2.name", person2.name);


//privet access modifier

class PrivatePersonData {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
this.name = name;
this.age = age;
    }

       private displaySecretMssg(): string {
return "This is my secret message from private method."
       }

    intro(): string {
       return `Hi, I am ${this.name} and I am ${this.age} years old.`;
    }
}

const person3 = new PrivatePersonData("Kalina", 26);
// person3.name; Property 'name' is private and only accessible within class 'PrivatePersonData'
// person3.age; Property 'age' is private and only accessible within class 'PrivatePersonData'

console.log(person3.intro());
//console.log(person3.displaySecretMssg());  Property 'displaySecretMssg' is private and only accessible within class 'PrivatePersonData'


//Class inheritance

class User {
name: string;

constructor(name: string) {
    this.name = name;
}

intro(): void {
    console.log('Nice to meet you!')
}
}

class UserDetails extends User {

    constructor(name: string) {
        super(name)
    }

showDetails():void {
console.log(`My name is ${this.name}`)
}
}

const user = new UserDetails('Bobi');
console.log("<------>");
console.log(user.name);
user.showDetails();
user.intro();



// protected access modifier

class ProtectedPerson {
//protected name: string;
//protected age: number;


constructor(protected name: string, protected age: number) {
    this.name = name;
    this.age = age;
}

getProtectedData(): string {
    return `Protected name ${this.name} and protected age ${this.age}`;
}
}

const protectedPerson = new ProtectedPerson('Protected Pesho', 20)

class Student extends ProtectedPerson {

   private great: number;

   constructor(name: string, age: number, great: number) {
    super(name, age)
    this.great = great;
   }

   studentIntro(): void {
    console.log(this.getProtectedData());
    console.log(`${this.name} is ${this.age} years old with great ${this.great}`);

   }
}
const student = new Student('Hristo',25, 6);
console.log("<------>");
student.studentIntro();


export {};