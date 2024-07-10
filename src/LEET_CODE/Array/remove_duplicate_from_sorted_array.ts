function removeDuplicates(nums: number[]): number {
    if(nums.length === 0) return 0;

    let index = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[index]) {
            index++;
            nums[index] = nums[i];
        }
    }

    return index + 1;
};

/**
 * Expect: sau khi đi qua các phần tử thì mảng nums sẽ thay đổi và có danh sách các item không trùng lặp tương ứng với số phần tử không trùng lặp 
 * Testcase: 
 *  - Testcase 1: [1, 1, 2] => k = 2 => nums => [1, 2, ...]
 *  - Testcase 2: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] => k = 5 => nums => [0, 1, 2, 3, 4, ...]
 */
console.log({
    _resultRemoveDuplicates: removeDuplicates([1,1,2])
})