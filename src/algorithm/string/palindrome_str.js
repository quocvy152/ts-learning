/**
 * Input: dogagod
 * => d o g a g o d
 *    0 1 2 3 4 5 6
 */

const isPalindromeStr = (str) => {
    let right = str.length - 1;
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[right])
            return false;

        right--;
    }
    return true;
}

const checkPalindrome = (str, left, right) => {
    if(left >= right) return true;

    if(str[left] !== str[right]) {
        return false;
    }

    return checkPalindrome(str, left + 1, right - 1);
}

console.log(isPalindromeStr('dogagod'))

let exampleStr = 'dogagod';
console.log(checkPalindrome(exampleStr, 0, exampleStr.length - 1))