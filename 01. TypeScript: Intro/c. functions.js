"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(10));
function getUpper(value) {
    return value.toUpperCase();
}
console.log(getUpper("Alan"));
// Passing Default Value
var loginUser = function (name, email, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    console.log(name, email, isAdmin);
};
loginUser("Akshat", "a@gmail.com");
