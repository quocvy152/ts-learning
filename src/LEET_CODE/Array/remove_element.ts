function removeElement(nums: number[], number: number): number {
    if(nums.length === 0) return 0;

    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== number) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index + 1;
};

/**
 * Testcase: 
 *  - Testcase 1: [3, 2, 2, 3] removeVal = 3 => [2, 2, ...]
 *  - Testcase 2:
 */
console.log({
    _resultRemoveElement: removeElement([3, 2, 2, 3], 3)
})