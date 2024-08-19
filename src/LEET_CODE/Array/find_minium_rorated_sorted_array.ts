/**
 * 
 *  Example 1:
        Input: nums = [3,4,5,1,2]
        Output: 1
        Explanation: The original array was [1,2,3,4,5] rotated 3 times.

    Example 2:
        Input: nums = [4,5,6,7,0,1,2]
        Output: 0
        Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

    Example 3:
        Input: nums = [11,13,15,17]
        Output: 11
        Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 */
function findMin(nums: number[]): number {
    if(nums.length === 0) return 0;

    for(let index = 0; index < nums.length; index++) {
        if(nums[index] > nums[index + 1]) {
            return nums[index + 1];
        }
    }

    return nums[0];
};

console.log({
    result: findMin([3,4,5,1,2]), // 1
    result2: findMin([4,5,6,7,0,1,2]),  // 0
    result3: findMin([11,13,15,17]),  // 11
})