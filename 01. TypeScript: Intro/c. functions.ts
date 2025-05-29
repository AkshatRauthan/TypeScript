function addTwo(num: number): number{
    return num + 2;
}
console.log(addTwo(10));


function getUpper(value: string): string{
    return value.toUpperCase();
}
console.log(getUpper("Alan"));


// Passing Default Value
let loginUser = (name: string, email: string, isAdmin: boolean = false): void => {
    console.log(name, email, isAdmin);
}
loginUser("Akshat", "a@gmail.com");


function getValue(myVal: number): (boolean | string) {
    if (myVal >= 5) return false;
    return "200 OK";
}
console.log(getValue(10))
console.log(getValue(1))


export {}