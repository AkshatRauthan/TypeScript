console.log("TS Connected");

class User {
    email: string;
    name: string;
    private city: string = ""; // If a parameter's value is not assigned by Constructor. It must have its own default value assigned here.

    constructor(email: string, name: string, city?: string) {
        this.email = email;
        this.name = name;
        if (city) this.city = city;
    }
}
const akshat = new User("a@a,com", "Akshat Rauthan");


// Shorthand declaration : Using Getters, Setters and Inheritence

class UserShorthand {
    private _courseCount = 1;
    protected p = 1;              // Can only be accessed by current class or classes which inherits it.

    constructor(
        public email: string,
        public name: string,
        readonly city?: string
    ) { }

    get getEmail():string { // Using Getters
        return this.email;
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNum: number){  // We can't put the return type of this function as void. It will throw an error
        if (courseNum > 1) this._courseCount = courseNum;
        else throw new Error("Given course count is invalid");
    }

    private deleteMethod(){
        console.log(`Object ${this.name} is deleted.`);
    }
}

class Admin extends UserShorthand {

    constructor(email:string, name:string, city:string){
        super(email, name, city);
    }
    
    set setValueOfP(p: number){
        if (p > 1) this.p = p;
    }

    get valueOfP(): number {
        return this.p;
    }
}

const user = new Admin("a@a.com", "akshat", "delhi");
console.log(user);
console.log(user.valueOfP);
user.setValueOfP = 10;
console.log(user.valueOfP);
