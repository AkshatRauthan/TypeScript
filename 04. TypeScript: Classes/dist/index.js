"use strict";
console.log("TS Connected");
class User {
    constructor(email, name, city) {
        this.city = ""; // If a parameter's value is not assigned by Constructor. It must have its own default value assigned here.
        this.email = email;
        this.name = name;
        if (city)
            this.city = city;
    }
}
const akshat = new User("a@a,com", "Akshat Rauthan");
// Shorthand declaration : Using Getters, Setters and Inheritence
class UserShorthand {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
        this._courseCount = 1;
        this.p = 1; // Can only be accessed by current class or classes which inherits it.
    }
    get getEmail() {
        return this.email;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum > 1)
            this._courseCount = courseNum;
        else
            throw new Error("Given course count is invalid");
    }
    deleteMethod() {
        console.log(`Object ${this.name} is deleted.`);
    }
}
class Admin extends UserShorthand {
    constructor(email, name, city) {
        super(email, name, city);
    }
    set setValueOfP(p) {
        if (p > 1)
            this.p = p;
    }
    get valueOfP() {
        return this.p;
    }
}
const user = new Admin("a@a.com", "akshat", "delhi");
console.log(user);
console.log(user.valueOfP);
user.setValueOfP = 10;
console.log(user.valueOfP);
