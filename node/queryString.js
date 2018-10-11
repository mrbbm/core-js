var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = `First Name: ${q.fName} <br> Last Name: ${q.lName}`; 
    res.end(txt);
}).listen(5775);

// URL : http://localhost:5775/?fName=Balamanigandan&lName=B
