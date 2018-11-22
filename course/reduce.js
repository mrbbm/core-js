const fs = require('fs');

var output = fs.readFileSync('./assets/employee.txt', 'utf8')
            .trim()
            .split('\n')
            .map((emp) => emp.trim().split('\t'))
            .reduce((collection, emp) => {
                collection[emp[0]] = collection[emp[0]] || [];
                collection[emp[0]].push({
                    language: emp[1],
                    experience: emp[2]
                });
                return collection;
            }, {});

console.log(output);

var o = { 
    a: {value:1}, 
    b: {value:2}, 
    c: {value:3} 
};

const obj = Object.keys(o).reduce(function (previous, key) {
    return previous + o[key].value;
}, 0);

console.log(obj);