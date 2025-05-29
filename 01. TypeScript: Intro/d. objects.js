"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Akshat",
    email: "a@gmail.com",
    isActive: true
};
function createUser(obj) {
    console.log("".concat(obj.name, " : ").concat(obj.isPaid));
}
createUser({ name: "A", isPaid: true });
// Weird Behaviour
createUser({ name: "Akshat", isPaid: false, email: "a@gmail.com" }); // Error
var newUser = { name: "Akshat", isPaid: false, email: "a@gmail.com" }; // No error
createUser(newUser);
function createCourse(name, price) {
    var obj = {
        name: name,
        price: price
    };
    return obj;
}
var obj = createCourse("TypeScript", 1500);
console.log(obj);
