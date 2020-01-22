
function display() {

  const time = new Date();

  document.querySelector('h3').innerHTML = time.toUTCString() > 12 ? today.getHours() - 12 : today.getHours();



} setInterval(display, 1000);
