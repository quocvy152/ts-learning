

// A simple program to count set bits
// in all numbers from 1 to n.
 
     
// Returns count of set bits present
//  in all numbers from 1 to n
function countSetBits(n)
{
    // initialize the result
    let bitCount = 0;
    for (let i = 1; i <= n; i++)
    {
        bitCount += countSetBitsUtil(i);
    }
    return bitCount;
}
    
// // A utility function to count set bits 
// // in a number x
// function countSetBitsUtil(x)
// {
//     if (x <= 0)
//     {
//         return 0;
//     }
//     return (x % 2 == 0 ? 0 : 1) + countSetBitsUtil(Math.floor(x/2));
// }


const countSetBitsUtil = (x) => {
    if(x <= 0) {
        return 0;
    }

    return (x % 2 === 0 ? 0 : 1) + countSetBitsUtil(Math.floor(x / 2));
}
    
// Driver program 
let n = 17;
console.log("Total set bit count is ");
console.log(countSetBits(n));
console.log(countSetBitsUtil(14));