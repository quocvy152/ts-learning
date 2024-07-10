function searchInsert(nums: number[], target: number): number {
    if(nums.length === 0) return 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target)
            return i;
    }

    for(let i = 1; i < nums.length; i++) {
        if((target > nums[i - 1]) && target < nums[i]) {
            return i;
        }
    }

    return target > nums[nums.length - 1] ? nums.length : 0;
};

/**
 * Testcase:
 *  - Example 1:
        Input: nums = [1,3,5,6], target = 5
        Output: 2

    - Example 2:
        Input: nums = [1,3,5,6], target = 2
        Output: 1

    - Example 3:
        Input: nums = [1,3,5,6], target = 7
        Output: 4
 */
console.log(searchInsert([1,3,5,6], 7))