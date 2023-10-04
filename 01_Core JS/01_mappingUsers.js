// Write a code to get array of names form given array os users
// Get back only active users
const users = [

    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30
    },
]

const namesArr = users.sort((user1, user2) => user1.age - user2.age)
    .filter(user => user.isActive)
    .map(obj => obj.name);

console.log(namesArr);