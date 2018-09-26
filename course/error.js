// Creates an instance representing an error that occurs regarding the global function eval().
// Note: Newer versions of JavaScript does not throw any EvalError. Use SyntaxError instead.
function evalError() {
    try {
        throw EvalError("Eval error raised by the User code");
    }
    catch (err) {
        console.log("Eval Error: " + err.name);
    }
}

// Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
function rangeError() {
    let num = 1;
    try {
        num.toPrecision(500);   // A number cannot have 500 significant digits
    }
    catch (err) {
        console.log("Range Error: " + err.name);
    }
}

// Creates an instance representing an error that occurs when de-referencing an invalid reference.
function referenceError() {
    let x;
    try {
        x = y + 1;   // y cannot be referenced (used)
    }
    catch (err) {
        console.log("Reference Error: " + err.name);
    }
}

// Creates an instance representing a syntax error that occurs while parsing code in eval().
function syntaxError() {
    try {
        eval('alert("Hello"');
    }
    catch (err) {
        console.log("Syntax Error: " + err.name);
    }
}

// Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
function typeError() {
    let x = 6;
    try {
        x.toLowerCase();
    }
    catch (err) {
        console.log("Type Error: " + err.name);
    }
}

function uriError() {
    try {
        decodeURI("%%%");   // You cannot URI decode percent signs
    } catch (err) {
        console.log("URI Error: " + err.name);
    }
}

function myError() {
    try {
        throw 'Custom Error from function myError()';
    }
    catch (err) {
        console.log("Custom Error: " + err);
    } finally {
        console.log("Final block from function myError()")
    }
}

evalError();
rangeError()
referenceError()
syntaxError()
typeError()
uriError()
myError();