/**
 * Input: 1230321
 * => 1 2 3 0 3 2 1 => So với số ban đầu
 */

const isPalindromeNum = (number) => {
    let tempNumber = number;
    let numberConvert = 0;

    while(number > 0) {
        numberConvert = numberConvert * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    if(numberConvert === tempNumber) {
        return 'Number palindrome';
    } else {
        return 'Not number palindrome';
    }
}

console.log(isPalindromeNum(12303211))