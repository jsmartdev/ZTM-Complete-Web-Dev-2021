/* eslint-disable */

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (a, b) => a + b;

//#2 Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) 

// addToTen(3) returns 13

//#3 Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) 

// curriedSum(30)(1) returns 31

//#4 Currying: What does the last line return?
const addition = (a, b) => a + b
const curriedAddition = (a) => (b) => a + b
const add5 = curriedAddition(5)
add5(12) 

// add5(12) returns 17

//#5 Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// compose(add1, add5)(10) returns 16

//#6 What are the two aspects of a pure function?

// 1 - Deterministic - always produces the same outcome if given the same variables

// 2- No Side Effects - only depends on its input variables
