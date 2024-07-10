function plusOne(digits: number[]): number[] {
    let result: number[] = [];
    let numberToPlus = BigInt(0);  // Sử dụng BigInt để khởi tạo số lớn

    for (let i = 0; i < digits.length; i++) {
        numberToPlus = numberToPlus * BigInt(10) + BigInt(digits[i]);  // Chuyển từng chữ số thành BigInt
    }

    let numberToPlusWithOne = numberToPlus + BigInt(1);  // Cộng thêm 1 vào số lớn

    while (numberToPlusWithOne !== BigInt(0)) {
        result.unshift(Number(numberToPlusWithOne % BigInt(10)));  // Lấy phần tử cuối cùng và chuyển đổi thành number
        numberToPlusWithOne = numberToPlusWithOne / BigInt(10);  // Chia số lớn cho 10
    }

    return result;
};

/**
 * Testcase:
 * - Testcase 1: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
 */
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))