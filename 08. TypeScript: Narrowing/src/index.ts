/* 
    Narrowing In JS
*/

function detectType(val: (number|string)){
    if (typeof val == "string"){
        return val.toLowerCase();
    }
    if (typeof val == "number"){
        return val + 3;
    }
}

function provideId(id:string | null){
    if (!id){
        console.log("Please provide the id");
        return;
    }
    return id.toLowerCase();
}

/*
    In the below function we have accounted for all teh cases except the case where we are given an empty string.
*/
function printAll(strs: string | string[] | null){ 

    if (strs){
        if (typeof strs === "object"){
            for (const s of strs){
                console.log(s);
            }
        }
        else if (typeof strs === "string"){
            console.log(strs);
        }
    }
}

/*
    Using in Operator.
*/
interface User {
    name: string
    email: string
}

interface Admin extends User {
    isAdmin: boolean;
    adminId: String;
}

function isAdminAccount(account: User|Admin): boolean{
    if ("isAdmin" in account) return account.isAdmin;
    return false;
}

/*  
    Using instanceof

    Used to find of a variable belongs to a class, interface or type.
    Like Date(), Array(numeber), Classes, Instances etc.
*/
function logValue(x: Date | string){
    if (x instanceof Date) console.log(x.toUTCString());
    else console.log(x.toUpperCase());
}

/*
    Type Predicates
*/

type Fish = {
    swim:() => void;
}
type Bird = {
    fly:() => void;
}

function isFish(pet: (Fish|Bird)): boolean {
    return ((pet as Fish).swim != undefined);
}
function getFood(pet: (Fish|Bird)): string{
    if (isFish(pet)){
        pet             // Here typeof fish is still Fish | Bird even if we are checking the if condition.
        return "fish food";
    }
    else {
        pet
        return "bird food";
    }
}

/* 
    This will work properly if we define the type of isFish function as `pet is Fish`.
*/
function isFishTwo(pet: (Fish|Bird)): pet is Fish {
    return ((pet as Fish).swim != undefined);
}
function getFoodTwo(pet: (Fish|Bird)): string{
    if (isFishTwo(pet)){
        pet             // instanceof Fish
        return "fish food";
    }
    else {
        pet            // instanceof Bird
        return "bird food";
    }
}

/*
    Discriminated Unions
*/
interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square;

/*
    Exhaustiveness Checking:
*/
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        
        case "square":
            return shape.side ** 2;

        default:
            const _defaultforshape: never = shape;
            return _defaultforshape;
    }
}