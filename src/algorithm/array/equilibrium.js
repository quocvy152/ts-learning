/**
 * Trả về index của phần tử sẽ ngăn array tại phần tử đó để 2 vế array trái và phải bằng nhau
 * [1, 2, 3, 4, 1, 5, 5]
 */

const equilibrium = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let sumLeft = 0, sumRight = 0;
        
        for(let j = 0; j < i; j++) {
            sumLeft += arr[j];
        }

        for(let k = i + 1; k < arr.length; k++) {
            sumRight += arr[k];
        }

        if(sumLeft === sumRight) {
            return i;
        }
    }
    return -1;
}

console.log({
    position: equilibrium([-7, 1, 5, 2, -4, 3, 0]),
    dontHaveElem: equilibrium([1, 2, 3])
})