/* eslint-disable */

// For all of these, what is the value of a when the function gets called with the alert()

// #1 Answer: 3

function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(a);
}


//#2 Answer: 0

var a = 0;
function q2() {
    a = 5;
}

function q22() {
    console.log(a);
}


//#3 Answer: hello

function q3() {
    window.a = "hello";
}


function q32() {
    console.log(a);
}

//#4 Answer: test

var a = 1;
function q4() {
    var a = "test";
    console.log(a);
}

//#5 Answer: 5, 5

var a = 2;
if (true) {
    var a = 5;
    console.log(a);
}
console.log(a);