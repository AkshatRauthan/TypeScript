const score: Array<number> = [];
const names: Array<string> = [];
/*
    Assume you want to define a function that returns the value of same type that it recieves.

    a) In first approach we can return any one type boolean aor number. So we can return bool value even for a number.
       So it not work.

    b) Here also we have the same case and we are even using any.

    c) But in third one, we are using generics to define that the output type of the function musl be similar to the 
       type of input variable;
       Here we can even pass our own types in these functions.
*/

function identityOne(val: boolean | number): (boolean | number) {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

function identityThreeShorthand<T>(val: T): T {
    return val;
}

identityThree(3);
identityThree("3");
identityThree(true);


// Passing user defined dtypes.
interface Bottle {
    type: number,
    brand: string,
}

// Passing User defined datatypes and also returning them.
function identityFour<Bottle>(obj : Bottle): Bottle{
    return obj;
}


/*
    Taking generic array as an input and return type.
    Input => Array<number>    Returns => Array<number>
    Input => Array<number | string>    Returns => Array<number | string>
*/

function getSearchProducts<T>(product: T[]): T[]{ // T => indivisual dtype of array like (number) or (string) or (number | string)....
    return product;                               // T[] => Array of T dtype.
}

/* Arroow Definition */
const getSearchProductsArrow = <T,>(arr: T[]): T[] => { // The , in <T> do not do anything. Just tells that it is for Generic dtype and not a JSX syntax.
    return arr;                                         // Do no changes.
}


/* 
    Using Type Parameter In Generics 
    Here we will be declayring a type parameter that is constrained by another type parameter.

    Ex: In the below example we are having two variables as input: valA and valB.
        valA can be of any dtype. But valB must be an object of instance Database.
*/

interface Database {
    connection : string,
    username: string,
    password: string,
    type: ("sql" | "nosql")
}

function anotherFunction<T, U extends Database>(valA:T, valB:U):object {
    return {
        valA,
        valB
    }
}

anotherFunction(3, {
    connection: "local-connection",
    username: "root",
    password: "1234",
    type: "nosql"
});


/* 
    Generic Classes In TS
*/

interface Quiz {
    name: string;
    author: string;
    subject: string;
}

interface Course {
    name: string;
    author: string;
    type: string;
    noOfStduents: number;
}

// We can create an object for both Course and Quiz in it without using implements keyword here1.
class Sellable<T> {
    public cart: T[] = [];

    addToCart(products: T){
        this.cart.push(products);
    }
};