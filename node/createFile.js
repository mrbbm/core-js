var fs = require('fs');

var txt = 'The Node.js file system module allows you to work with the file system on your computer.';

fs.appendFile('./assets/file01.txt', txt, (err) => {
    if(err) {
        throw err;
    }

    console.log('Append file: Successfully created !');
})

fs.open('./assets/file02.txt', 'w', (err, file) => {
    if(err) {
        throw err;
    }

    console.log('Open file with W mode: Empty file successfully created !');
})

fs.writeFile('./assets/file03.txt', txt, (err) => {
    if(err) {
        throw err;
    }

    console.log('Write file: Successfully created !');
})