// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// Normal function - Needs to Invoke internal function explicitly
var add_01 = () => {
    var counter = 0;
    return () => { counter += 1; return counter };
}

var result = 0;

var funObject = add_01();
result = funObject();
result = funObject();
result = funObject();

console.log(result);


// IIFE (Immediately Invoked Function Expression)
var add_02 = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

result = 0;

result = add_02();
result = add_02();
result = add_02();

console.log(result);