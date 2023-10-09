// Write a function to convert a string to title case.
const titleCase = (str) => {

    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(titleCase("sHOrt AnD sMARt"));