"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "155";
var akshat = {
    name: "akshat", id: 334
};
akshat = {
    username: "hc",
    id: akshat.id
};
/*
    function getDbId1(id: number | string){
        id.toLowerCase() // Error as it can also be a number.
        id += 2; // Error as it can also be a string.
        console.log(`DB id is : ${id}`);
    }
*/
function getDbId(id) {
    if (typeof id === "string")
        id = id.toLowerCase(); // Error removed as we do checkiing....
    else
        id += 2; // Error removed as we are doing type checking first.....
    console.log("DB id is : ".concat(id));
}
getDbId(3);
getDbId("CU30");
// Declaring Multiple Datatypes With Arrays:
var data = [];
data.push(101);
data.push(100);
data.push("cu10101");
data.push("Alan");
console.log(data);
