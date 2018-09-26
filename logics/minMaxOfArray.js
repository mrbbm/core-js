// Min and Max value from the Arguments

/*
    Finding Min and Max Numbers using Function
*/
function findMinimumNumber() {
    var i;
    var max = Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < max) {
            max = arguments[i];
        }
    }
    return max;
}

result = findMinimumNumber(20, 8, 5775, 6, 33);
console.log('Minimum Number using normal function is ' + result); // Output is 6

function findManimumNumber() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

result = findManimumNumber(20, 8, 5775, 6, 33);
console.log('Maximum Number using normal function is ' + result); // Output is 5775


/*
    Finding Min and Max Numbers using apply technique
*/

var numArray = [20, 8, 5775, 6, 33];

result = Math.min.apply(this, numArray);
console.log('Minimum Number using apply technique is ' + result); // Output is 6

result = Math.max.apply(this, numArray);
console.log('Manimum Number using apply technique is ' + result); // Output is 5775

result = numArray.sort((a, b) => { return a - b})[0];
console.log('Minimum Number using Array pre-defined function is ' + result); // Output is 6

result = numArray.sort((a, b) => { return b - a})[0];
console.log('Manimum Number using Array pre-defined function is ' + result); // Output is 5775