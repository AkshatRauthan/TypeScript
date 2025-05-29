let score: number | string = 33;

score = 44;
score = "155";

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let akshat: User | Admin = {
    name: "akshat", id: 334
}

akshat = {
    username: "hc",
    id: akshat.id
}
/*
    function getDbId1(id: number | string){
        id.toLowerCase() // Error as it can also be a number.
        id += 2; // Error as it can also be a string.
        console.log(`DB id is : ${id}`);
    }
*/

function getDbId(id: number | string){
    if (typeof id === "string") id = id.toLowerCase() // Error removed as we do checkiing....
    else id += 2;  // Error removed as we are doing type checking first.....

    console.log(`DB id is : ${id}`);
}

getDbId(3);
getDbId("CU30");


// Declaring Multiple Datatypes With Arrays:
const data: Array<number | string> = [];
data.push(101);
data.push(100);
data.push("cu10101");
data.push("Alan");
console.log(data);


// Having variables with values from an enum.
let seatType: "aisle" | "middle" | "window";
seatType = "aisle";
seatType = "middle";
seatType = "window";
// seatType = "hello"; // Error as it is not in the described values in enum.


export {}