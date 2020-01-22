const date = new Date();
const time = new Date();


document.querySelector('h1').innerHTML = date.toDateString();
document.querySelector('h3').innerHTML = time.toUTCString();
