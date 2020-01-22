





display.setInterval(function () {
  const time = new Date();
  document.querySelector('h3').innerHTML = time.toUTCString();

} (display, 1000);
