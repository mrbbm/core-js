// Hoisting is JavaScript's default behavior of moving declarations to the top and its applicable only for var keyword.

var i = 2;
const hoisted_01 = () => {
    console.log(i); // output 2
    i = 5;
}

const hoisted_02 = () => {
    console.log(i);
    var i = 5; // output undefined
}

hoisted_01();
hoisted_02();
console.log(i); // output 5