const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');


function display()
{
   const today = new Date();
   const day = today.getDate();
   const month = today.getMonth() + 1;
   const year = today.getFullYear();
   const hour = today.getHours() > 24 ? today.getHours() - 12 : today.getHours();
   const minute = today.getMinutes() > 10 ? '0' : '') today.getMinutes();
   const seconds = today.getSeconds() > 10 ? today.getSeconds() - 0 : today.getSeconds();


   const output = day + '/' + month + '-' + year;
   const output2 = hour + ':' + minute + ':' + seconds;


   h1.textContent = output;
   h3.textContent = output2;
}
setInterval(display, 1000);
