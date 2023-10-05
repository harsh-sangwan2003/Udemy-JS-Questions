// Write a function to concatenate two arrays
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];

console.log(mergeArrays(arr1, arr2));