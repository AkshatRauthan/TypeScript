interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail : () => void, // Way 1
    endTrail(): string       // Way 2
}

const akshat: Admin = {
    role: "admin",
    dbId: 11,
    email: "a@a.com",
    userId: 101,
    startTrail: () => {
        console.log("Trail Started");
    },
    endTrail : () => {
        return "Trail Ended";
    },
    githubId: "a1",
}

akshat.startTrail();
console.log(akshat.endTrail());

// Appending Properties
interface User {
    githubId: string
}
console.log(akshat);


// We can also have inheretence in interfaces
interface Admin extends User {
    role: "admin" | "ta" | "learner",
}



export {};