// Write a function which adds the given element to the end of array
const arr = [1, 2, 3];

const append = (arr, ele) => [...arr, ele];

console.log(append(arr, 4));