var http = require('http');
var fs = require('fs-extra');
var formidable = require('formidable');

/*
    Requires to install the following packages
    1. npm init
    2. npm install formidable --save
    2. npm install fs-extra --save

    Update the package.json from main.js to fileUploader.js
    => "main": "fileUploader.js",
*/

http.createServer((req, res) => {
    if(req.url === '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            var oldPath = files.filetoupload.path;
            var newPath = `./assets/${files.filetoupload.name}`;
            console.log(oldPath);
            fs.move(oldPath, newPath, (err) => {
                if(err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('Error Occured');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end('File uploaded successfully');
                }
            })
        });
    } else {
        fs.readFile('./assets/fileUploader.html', (err, data) => {
            if(err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Error Occured');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        })
    }
}).listen(5775);