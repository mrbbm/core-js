let message = 
            name =>
                experience =>
                    language =>
                        name + ' has good ' + experience + ' on ' + language;

let output = message('Bala')(5)('Python');

console.log(output);