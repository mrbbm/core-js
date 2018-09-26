let i = 1;

function print_01() {
    let i = 3;
    console.log("Printed from LOCAL Scope function print_01 (I): " + i); // output is 3
}

function print_02() {
    console.log("Printed from LOCAL Scope function print_02 (I): " + i); // output is 1
    let j = 3;
    {
        let j = 2;
    }
    console.log("Printed from LOCAL Scope function print_02 (J): " + j); // output is 3
}

function print_03() {
    console.log("Printed from LOCAL Scope function print_03 (I): " + i); // output is 1
    let j = 3;
    {
        j = 2;
    };
    console.log("Printed from LOCAL Scope function print_03 (J): " + j); // output is 2
}

function print_04() {
    try {
        console.log("Printed from LOCAL Scope function print_04 (I):" + i); // ReferenceError: i is not defined
        let i = 3;
    }
    catch(err) {
        console.log("Printed from function print_04 : Error occured while executing console.log statement without declaring 'i', it won't accept Global declaration. :(");
        console.log(err);
    }
}

function print_05() {
    console.log("Printed from LOCAL Scope function print_05 (I): " + i); // output is 1
    {
        j = 2; // By default its var
        i = 24; // Global variable gets update with value 24
    };
    console.log("Printed from LOCAL Scope function print_05 (J): " + j); // output is 2
}

console.log("Printed from GLOBAL Scope : " + i); // output is 1
print_01();
print_02();
print_04();
print_03();
print_05();
console.log("Printed from GLOBAL Scope : " + i); // output is 24 because of function print_05()