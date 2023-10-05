// Sort the array of numbers
const arr = [3, 4, 1];
arr.sort((a, b) => a - b);
console.log(arr);

// Sort the objects by author's last name
const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
]

books.sort((obj1, obj2) => {

    const name1 = obj1.author.split(" ")[1];
    const name2 = obj2.author.split(" ")[1];

    return name1 < name2 ? -1 : 1;
})

console.log(books);