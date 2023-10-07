const arr = [1,2,3,4,1,1,2];

const minValue = Math.min(...arr);


const occurrence = arr.filter(ele=>ele===minValue).length;

console.log(occurrence);