const linearSearch = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            return i;
        }
    }
    return -1;
}

console.log({
    linearSearch: linearSearch([1, 3, 99, 10, 24, 87, 19], 87)
})