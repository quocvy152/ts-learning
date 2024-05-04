const selectionSort = (array) => {
    let temp, minIndex;

    for(let i = 0; i < array.length - 1; i++) {
        minIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[minIndex] > array[j]) {
                minIndex = j;
            }
        }

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
}

console.log(selectionSort([64, 25, 12, 22, 11]));