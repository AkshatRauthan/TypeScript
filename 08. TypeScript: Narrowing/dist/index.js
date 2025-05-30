"use strict";
/*
    Narrowing In JS
*/
function detectType(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    if (typeof val == "number") {
        return val + 3;
    }
}
function provideId(id) {
    if (!id) {
        console.log("Please provide the id");
        return;
    }
    return id.toLowerCase();
}
/*
    In the below function we have accounted for all teh cases except the case where we are given an empty string.
*/
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account)
        return account.isAdmin;
    return false;
}
/*
    Using instance of => Used to find of a variable belongs to a class, interface or type.
    Like Date(), Array(numeber), Classes, Instances etc.
*/
function logValue(x) {
    if (x instanceof Date)
        console.log(x.toUTCString());
    else
        console.log(x.toUpperCase());
}
