"use strict";
const score = [];
const names = [];
/*
    Assume you want to define a function that returns the value of same type that it recieves.

    a) In first approach we can return any one type boolean aor number. So we can return bool value even for a number.
       So it not work.

    b) Here also we have the same case and we are even using any.

    c) But in third one, we are using generics to define that the output type of the function musl be similar to the
       type of input variable;
       Here we can even pass our own types in these functions.
*/
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityThreeShorthand(val) {
    return val;
}
identityThree(3);
identityThree("3");
identityThree(true);
// Passing User defined datatypes and also returning them.
function identityFour(obj) {
    return obj;
}
/*
    Taking generic array as an input and return type.
    Input => Array<number>    Returns => Array<number>
    Input => Array<number | string>    Returns => Array<number | string>
*/
function getSearchProducts(product) {
    return product; // T[] => Array of T dtype.
}
/* Arroow Definition */
const getSearchProductsArrow = (arr) => {
    return arr; // Do no changes.
};
function anotherFunction(valA, valB) {
    return {
        valA,
        valB
    };
}
anotherFunction(3, {
    connection: "local-connection",
    username: "root",
    password: "1234",
    type: "nosql"
});
// We can create an object for both Course and Quiz in it without using implements1 keyword here1.
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
;
