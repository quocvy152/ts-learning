/**
 * Input: ssass -> sasss: 0 -> assss: 1 -> ssssa: 2 -> sssas: 3 -> ssass: 4
 */
const isPalindrome = (str) => {
    let left = 0, right = str.length - 1;
    for(let i = 0; i < str.length / 2; i++) {
        if(str[left] !== str[right]) {
            return false;
        }
        left++; 
        right--;
    }

    return true;
}

const isRotationPalindrome = (str) => {
    if(isPalindrome(str)) {
        return true;
    }

    for(let i = 0; i < str.length - 1; i++) {
        let str1 = str.substring(0, i + 1);
        let str2 = str.substring(i + 1, str.length);
        console.log({str1, str2});

        let combine = str2 + str1;

        if(isPalindrome(combine)) {
            return true;
        }
    }

    return false;
}

console.log({
    isRotationPalindrome: isRotationPalindrome('aaaad'),
    isRotationPalindrome2: isRotationPalindrome('abcd'),
})