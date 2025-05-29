var seat = 10 /* SeatChoice.AISLE */;
var s2 = "aisle" /* E2.AISLE */;
/*
    Always use const with enums. => const ENUM E2
    As TS makes IIFE function for enum declaration that is not suitable for longer enums.
    But if we use const then it directly generates the variable by taking the vaulues from
    the enums without creating any function. That is considered good.
*/ 
