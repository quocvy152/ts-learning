/**
 * TUPLES: specical type in TS, it declare array with fixed size and types
 */
const myCustomArray: [string, number, boolean] = ['Hello', 10, false];
// myCustomArray[0] = 100; ERROR: Type 'number' is not assignable to type 'string'.
myCustomArray[0] = 'Hello to Hi';
console.log(myCustomArray);