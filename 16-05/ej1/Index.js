let http = require("http");

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!");
  })
  .listen(8080);

  console.log('Mi primer script en The Bridge!!!')