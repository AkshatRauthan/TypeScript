"use strict";
/*
    All the datatypes in TS are in lower case
    Declaration => `let variableName: type = value`
    Don't even need to declare the type if directly assigning value : Type Inference
    Declaration => `let variableName = value`
*/
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello Akshat";
console.log(greeting);
console.log(typeof greeting);
var id1 = 124;
var id2 = 122.256;
console.log(id1);
console.log(id2);
console.log(typeof id1);
console.log(typeof id2);
/*
    Both will be of type "number".
*/
var isLoggedIn = false;
console.log(isLoggedIn);
// greeting = 10;
/*
    Throws a TS error, but it can be done is JS. So code will be compiled and will run.
    The code will compile even if we gave a TS error, until our code also contains something which
    also throws an error during compilation of the .js file.
    So, code will be compiled until we have done something that throws error in JS.
*/
/*
    Don't use any => Defeats the whole purpose of TypeScript : "Type Safety"
    Remove it even when TS is not able to infer/detect the variable type.

    Any => not a datatype.
    It just removes type checking for the variable it is assigned to.
*/
// Also infers functions
function hero(a) {
    if (a == 1)
        return "Thor";
    return "Ironman";
}
console.log(typeof hero);
var hero1 = hero(1);
var hero2 = hero(2);
console.log(typeof hero1);
console.log(typeof hero2);
// Solves the dowble declaration error that comes after compiling into .js file.
