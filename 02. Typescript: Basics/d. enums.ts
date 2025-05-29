const enum SeatChoice {
    AISLE = 10,  // code passing  => default is 0. rest are incremental.
    MIDDLE,      // 11
    WINDOW = 22, // 22
    FOURTH       // 23
}

/*
    But if you have any dtype except numbers for code of enums. Then you need to explicitly define
    all the code.
*/

const enum E2 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window",
    ETC = 235,
    AA, // Will only work if choice above it has number code.
    FOURTH = 0,
}

const seat = SeatChoice.AISLE;
const s2 = E2.AISLE;

/*
    Always use const with enums. => const ENUM E2
    As TS makes IIFE function for enum declaration that is not suitable for longer enums.
    But if we use const then it directly generates the variable by taking the vaulues from 
    the enums without creating any function. That is considered good.
*/