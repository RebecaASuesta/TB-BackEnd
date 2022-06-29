let http = require("http");

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("");
  })
  .listen(8080);

const home = document.getElementById("home");
const quienesSomos = document.getElementById("quienesSomos");
const dondeEstamos = document.getElementById("dondeEstamos");
const queHacemos = document.getElementById("queHacemos");
const contacto = document.getElementById("contacto");

console.log(home, quienesSomos, dondeEstamos, queHacemos, contacto)

// No me sale pero creo que tampoco era esto lo que se pedía así que lo voy a dejar aquí que no puedo más