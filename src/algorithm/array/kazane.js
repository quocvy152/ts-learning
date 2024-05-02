// function maxSubarraySum(arr) {
//     let maxEndingHere = arr[0];
//     let maxSoFar = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//         console.log("🚀 ~ maxSubarraySum ~ maxEndingHere:", maxEndingHere)
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//         console.log("🚀 ~ maxSubarraySum ~ maxSoFar:", maxSoFar)
//     }

//     return maxSoFar;
// }

// Kiểm tra với các test case đã cho
// console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: 7
// console.log(maxSubarraySum([2])); // Output: 2
// console.log(maxSubarraySum([5, 4, 1, 7, 8])); // Output: 25

/**
 * Mảng con liền kề có tổng lớn nhất (Kazane's Algorithm)
 * Input:
 *  + Array parent: [9, -2, 3, -4, 5, 6, 10, -1] => Trả về tổng lớn nhất của SubArray Parent => Sum: 8
 */
const sumMaxSubArr = (array) => {
    let maxCurrent = array[0];
    let maxSubArr = array[0];

    for(let i = 1; i < array.length; i++) {
        maxCurrent = Math.max(array[i], maxCurrent + array[i]);
        maxSubArr = Math.max(maxSubArr, maxCurrent);
    }

    return maxSubArr;
}
console.log(sumMaxSubArr([2])); // Output: 2