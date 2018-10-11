var fs = require('fs');

fs.rename('./assets/file03.txt', './assets/file04.txt', (err) => {
    if(err) {
        throw err;
    }

    console.log('Rename file: Successfully file gets renamed !');
});