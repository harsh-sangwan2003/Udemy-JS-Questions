// Add a link back to the source of the text after the paragraph tag.(https://forcemipsum.com/)
let link = document.createElement('a');
link.href = 'https://forcemipsum.com/';
link.innerText = 'Text after lorem ipsum';

document.body.appendChild(link);