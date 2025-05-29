"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Tuples => Used when the oreder of values matter
    FOr ex. if we want a string in 0th index, numebr in 1st and boolean in 2nd nd fix length
    of data
*/
var user;
user = ["hello", 123, true];
console.log(user);
var red = [255, 0, 0];
console.log(red);
// Do not use it due to the following resason: 
red.push(123);
red.push(135);
red.push(1233);
red.push(131);
console.log(red);
