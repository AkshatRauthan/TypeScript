"use strict";
/*
    readonly => READ ONLY KEYWORD
    ? => OPTIONAL KEYWORD
*/
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "12345",
    name: "h",
    email: "a@a.com",
    isActive: true
};
// Changing values of myUser
myUser.email = "ak@rau.com";
myUser.name = "ak_rau";
myUser.isActive = false;
// myUser._id = "54321" // Error as it is read-only.
console.log(myUser);
