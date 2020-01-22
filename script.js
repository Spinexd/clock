const date = (new Date.toLocaleString({hour: '2-digit', minute: '2digit', seconds: '2-digit'}));


document.querySelector('h1').innerHTML = date;
