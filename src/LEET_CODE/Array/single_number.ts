/**
 * Testcase:
    Example 1:
        Input: nums = [2,2,1]
        Output: 1

    Example 2:
        Input: nums = [4,1,2,1,2]
        Output: 4

    Example 3:
        Input: nums = [1]
        Output: 1
 */
// // Approach 1
/**
 * RESULT:
 *  Runtime: 890 ms Beats 5.05%
 *  Memory: 57.04 MB Beats 14.91%
 */
// function singleNumber(nums: number[]): number {
//     for(let i = 0; i < nums.length; i++) {
//         const arrFilter = nums.filter(num => num === nums[i]);
//         if(arrFilter.length === 1)
//             return nums[i];
//     }

//     return 0;
// };

/**
 * RESULT:
 *  Runtime: 84 ms Beats 17.15%
 *  Memory: 53.01MB Beats 48.27%
 */
function singleNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i <= nums.length;) {
        let counter = 1;
        let index = i + 1;
        
        while(nums[i] === nums[index]) {
            counter++;
            index++;
        }

        if(counter === 1) {
            return nums[i];
        }

        i = index;
    }

    return 0;
};

console.log({
    result: singleNumber([2,2,1]),
    result2: singleNumber([4,1,2,1,2,]),
    result3: singleNumber([1]),
})