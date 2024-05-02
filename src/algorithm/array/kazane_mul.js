/**
 * Mảng con liền kề có tích lớn nhất (Kazane's Algorithm)
 * Input:
 *  + Array parent: [2, -2, -3, -4, 5, 6, 10, -1] => Trả về tích lớn nhất của SubArray Parent => Mul: 8
 */
const mulMaxSubArr = (array) => {
    let maxEndingHere = array[0];
    let minEndingHere = array[0];
    let maxSoFar = array[0];

    for(let i = 1; i < array.length; i++) {
        let tempMaxending = maxEndingHere;
        maxEndingHere = Math.max(array[i], array[i] * tempMaxending, array[i] * minEndingHere);
        minEndingHere = Math.min(array[i], array[i] * tempMaxending, array[i] * minEndingHere);
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
    }

    return maxSoFar;
}

console.log(mulMaxSubArr([6, -3, -10, 0, 2])); // Output: 