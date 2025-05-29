/*
    Tuples => Used when the order of values matter
    FOr ex. if we want a string in 0th index, numebr in 1st and boolean in 2nd nd fix length
    of data
*/
let user: [string, number, boolean];
user = ["hello", 123, true];
console.log(user);

type RGB = [number, number, number];
let red: RGB = [255, 0, 0];
console.log(red);

// Do not use it due to the following resason: 
red.push(123);
red.push(135);
red.push(1233);
red.push(131); // Creates a 3d array with column size 3.
console.log(red);
/*
    255   0    0
    123 135 1233
    131
*/

export {}