var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end('Hello World !');
}).listen(5775);

// URL : http://localhost:5775