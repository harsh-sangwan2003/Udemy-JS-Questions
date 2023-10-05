// Check that user with such name exists or not
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

const isNameExists = (users,name)=>users.some(ele=>ele.name===name)

console.log(isNameExists(users,"John"));