// The Function() Constructor
const fun_01 = new Function("r", 
`{
    const pi = 3.14;
    return pi * r * r;
}`);

var result = fun_01(2);
console.log("Result generated using Function Constructor " + result) // output of result is 12.56


// Define function using the keyword 'function'
var fun_02 = function (r) {
    const pi = 3.14;
    return pi * r * r;
};

var result = fun_02(2);
console.log("Result generated using function keyword " + result) // output of result is 12.56


// Define function using inline
var fun_03 = (r) => {
    const pi = 3.14;
    return pi * r * r;
};

var result = fun_03(2);
console.log("Result generated using inline " + result) // output of result is 12.56


// Define function using IIFE (Immediately Invoked Function Expression)
var result = (function (r) {
    const pi = 3.14;
    return pi * r * r;
})(2);
console.log("Result generated using IIFE " + result) // output of result is 12.56
