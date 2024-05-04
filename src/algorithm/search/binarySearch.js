/**
 * Input: [1, 3, 4, 6, 7, 8, 9, 10]
 *         0  1  2  3  4  5  6  7     
 */

const binarySearch = (arr, x) => {
    let left = 0, right = arr.length - 1;
    let mid;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);

        if(arr[mid] === x) {
            return mid;
        }

        if(x > arr[mid]) {
            left = mid + 1;
        }

        if(x < arr[mid]) {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 3, 4, 6, 7, 8, 9, 10], 10))