// Write a function which implements range

const myRange = (start,end)=>[...Array(end-start).keys()].map(ele=>ele+start);

console.log(myRange(1,50));