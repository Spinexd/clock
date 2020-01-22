function display {

  const time = new Date();
  document.querySelector('h3').innerHTML = time.toUTCString();

}
setInterval(display, 1000);
