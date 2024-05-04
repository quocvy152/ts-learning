// const bubbleSort = (array) => {
//     let temp;
//     let swapped;
    
//     for(let i = 0; i < array.length - 1; i++) {
//         swapped = false;
//         for(let j = 0; j < array.length - i - 1; j++) {
//             if(array[j] > array[j + 1]) {
//                 temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//                 swapped = true;
//             }
//         }

//         if(!swapped) break;
//     }

//     return array;
// }

// console.log(bubbleSort([1, 2, 3, 4]))


/**
 * Sort: Asc: tăng dần
 * Dec: giảm dần
 */
const bubbleSortDec = (array) => {
    let temp;
    let swapped;

    for(let i = 0; i < array.length - 1; i++) {
        swapped = false;
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] < array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        if(!swapped) {
            break;
        }
    }

    return array;
}

console.log(bubbleSortDec([1, 99, 6, 7, 213, 2, 4, 100]))