var fs = require('fs');

fs.appendFile('./assets/file01.txt', 'Hello World !', (err) => {
    if(err) {
        throw err;
    }

    console.log('Append file: Successfully file gets update !');
})

fs.writeFile('./assets/file03.txt', 'Hello World !', (err) => {
    if(err) {
        throw err;
    }

    console.log('Write file: Successfully file content gets replaced !');
})