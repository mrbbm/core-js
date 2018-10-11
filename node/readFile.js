var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./assets/index.html', (err, data) => {
        if(err) {
            res.writeHead(500, { 'ContentType': 'text/html' });    
        } else {
            res.writeHead(200, { 'ContentType': 'text/html' });
            res.write(data);
            res.end();
        }
    })
}).listen(5775);