// A JavaScript function does not perform any checking on parameter values (arguments).

function print(a, b) {
    console.log("The value of a is " + a);
    console.log("The value of b is " + b);
}

print();
console.log("-------------");
print("Bala");
console.log("-------------");
print("Bala", "Sakthi");
console.log("-------------");
print("Bala", "Sakthi", "Prayag");
console.log("-------------");

/*
The value of a is undefined
The value of b is undefined
-------------
The value of a is Bala
The value of b is undefined
-------------
The value of a is Bala
The value of b is Sakthi
-------------
The value of a is Bala
The value of b is Sakthi
-------------
*/


// Default Parameter
function print_01(a, b = "BBM") {
    console.log("The value of a is " + a);
    console.log("The value of b is " + b);
}

print_01();
console.log("-------------");
print_01("Bala");
console.log("-------------");
print_01("Bala", "Sakthi");
console.log("-------------");
print("Bala", "Sakthi", "Prayag");
console.log("-------------");

/*
-------------
The value of a is undefined
The value of b is BBM
-------------
The value of a is Bala
The value of b is BBM
-------------
The value of a is Bala
The value of b is Sakthi
-------------
The value of a is Bala
The value of b is Sakthi
-------------
*/


// Arguments Object
function print_02() {
    var output = JSON.stringify(arguments)
    console.log("The Argument passed is ", output);
}

print_02(20,8,5775,6,33);