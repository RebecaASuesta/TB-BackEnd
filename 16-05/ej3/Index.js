let http = require("http");

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!");
  })
  .listen(8080);

const numeros = require('./numeros')
numeros.esPar(2);
numeros.esPar(3);
numeros.esPar(101);
numeros.esPar(201);
numeros.esPar(100);