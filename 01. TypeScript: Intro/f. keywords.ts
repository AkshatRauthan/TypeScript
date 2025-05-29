/* 
    readonly => READ ONLY KEYWORD 
    ? => OPTIONAL KEYWORD
*/


type User = {
    readonly _id: string   // You can't change after object creation
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "a@a.com",
    isActive: true
}

// Changing values of myUser
myUser.email = "ak@rau.com";
myUser.name = "ak_rau";
myUser.isActive = false;
// myUser._id = "54321" // Error as it is read-only.

console.log(myUser);


// Mixing and creating new objects.

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
};

export {}