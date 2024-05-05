const ternarySearch = (arr, x) => {
    let left = 0, right = arr.length - 1, mid1, mid2;

    while(right >= left) {
        mid1 = left + Math.floor((right - left) / 3); 
        mid2 = right - Math.floor((right - left) / 3); 

        if(x === arr[mid1]) {
            return mid1;
        }

        if(x === arr[mid2]) {
            return mid2;
        }

        if(x > arr[mid1] && x < arr[mid2]) {
            left = mid1 + 1;
            right = mid2 - 1;
        }

        if(x < arr[mid1]) {
            right = mid1 - 1;
        }

        if(x > arr[mid2]) {
            left = mid2 + 1;
        }
    }

    return -1;
}

console.log({
    ternarySearch: ternarySearch([1, 2, 3, 5, 6, 8, 10, 12, 19, 20, 26, 29, 30], 20)
})