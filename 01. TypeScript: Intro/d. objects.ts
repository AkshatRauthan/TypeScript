const user = {
    name: "Akshat",
    email: "a@gmail.com",
    isActive: true
}


function createUser(obj: {name: string, isPaid: boolean}){
    console.log(`${obj.name} : ${obj.isPaid}`)
}
createUser({name: "A",isPaid: true});


// Weird Behaviour
createUser({name: "Akshat", isPaid: false, email: "a@gmail.com"}); // Error in TS: Execute normally in JS

let newUser = {name: "Akshat", isPaid: false, email: "a@gmail.com"}; // No error
createUser(newUser);


function createCourse(name:string, price:number):{name: string, price: number}{
    let obj = {
        name: name,
        price: price
    }
    return obj;
}
const obj = createCourse("TypeScript", 1500);
console.log(obj);


export {}