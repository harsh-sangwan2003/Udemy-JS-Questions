// Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
const pTag = document.querySelector('p');

pTag.innerHTML = pTag.innerHTML.split(" ").map(word=>{

    return word.length>8?`<span style="background-color:yellow">${word}</span>`:word;
}).join(" ");