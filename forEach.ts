// forEach method
const nums: number[] = [10, 20, 30, 40];

nums.forEach((n: number, index: number) => {
    console.log(`Index ${index}: value ${n}`);
});

// sum nums
let sum: number = 0;

nums.forEach((num:number) => {
sum = sum + num;
//short way (sum +=n);
})
console.log("sum of nums", sum);

//active users
interface User {
    id: number,
    name: string,
    isActive: boolean,
}

const users: User[] = [
    {id:1, name: "Anna", isActive: true},
    {id:2, name: "Peter", isActive: false},
    {id:3, name: "Rosen", isActive: true},
    {id:4, name: "Ivan", isActive: false},
];

let activeIds: number[] = [];

users.forEach((user: User) => {
    if(user.isActive) {
activeIds.push(user.id)
    }
});

console.log("activeIds", activeIds)

export{};