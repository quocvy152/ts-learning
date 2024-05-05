/**
 * Input: [1, 2, 1, 3, 3] => Output: 2
 * Input: [-1, 2, -1, 2, 3] => Output: 3
 */

const isRepeatElement = (arr, element) => {
    let numRepeat = 0;

    for(let i = 0; i < arr.length; i++) {
        if(element === arr[i]) {
            numRepeat += 1;
        }
    }

    if(numRepeat > 1) {
        return true;
    } else {
        return false;
    }
}

const nonRepeatFirstElement = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        const isRepeat = isRepeatElement(arr, arr[i]);
        if(!isRepeat) {
            return arr[i];
        }
    }
    return -1;
}

console.log({
    nonRepeatFirstElement: nonRepeatFirstElement([-1, 2, -1, 3, 0]),
    nonRepeatFirstElement1: nonRepeatFirstElement([9, 4, 9, 6, 7, 4]),
    nonRepeatFirstElement2: nonRepeatFirstElement([1, 2, 1, 3, 3]),
    nonRepeatFirstElement3: nonRepeatFirstElement([-1, 2, -1, 2, 3]),
})