"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var akshat = {
    role: "admin",
    dbId: 11,
    email: "a@a.com",
    userId: 101,
    startTrail: function () {
        console.log("Trail Started");
    },
    endTrail: function () {
        return "Trail Ended";
    },
    githubId: "a1",
};
akshat.startTrail();
console.log(akshat.endTrail());
console.log(akshat);
