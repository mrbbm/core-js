var fs = require('fs');

fs.unlink('./assets/file02.txt', (err) => {
    if(err) {
        throw err;
    }

    console.log('Delete file: Successfully file gets deleted !');
});