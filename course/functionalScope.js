var i = 1;

function print_01() {
    var i = 3;
    console.log("Printed from LOCAL Scope function print_01 : " + i); // output is 3
}

function print_02() {
    var i = 6;
    console.log("Printed from LOCAL Scope function print_02 : " + i); // output is 6
}

function print_03() {
    console.log("Printed from LOCAL Scope function print_03 : " + i); // output is undefined
    var i = 15;
}

function print_04() {
    console.log("Printed from LOCAL Scope function print_04 : " + i); // output is undefined
    var i = 15;
    {
        var i = 6;
        console.log("Printed from LOCAL Scope (inside BLOCK Scope) function print_04 : " + i); // output is 6
    }
    console.log("Printed from LOCAL Scope function print_04 : " + i); // output is 6
}

function print_05() {
    var i = 15;
    (() =>{
        var i = 6;
        console.log("Printed from LOCAL Scope (inside BLOCK Scope) function print_05 : " + i); // output is 6
    })()
    console.log("Printed from LOCAL Scope function print_05 : " + i); // output is 15
}

function print_06() {
    const result = i + 2;
    console.log("Printed from LOCAL Scope function print_06 : " + result); // output is NaN
    var i = 15;
}

function print_07() {
    const result = i + 2;
    console.log("Printed from LOCAL Scope function print_07 : " + result); // output is 3
    i = 24;
}

console.log("Printed from GLOBAL Scope : " + i); // output is 1
print_01();
print_02();
print_03();
print_04();
print_05();
print_06();
print_07();
console.log("Printed from GLOBAL Scope : " + i); // output is 24 because of function print_05()