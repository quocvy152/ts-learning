type TwoSumParam = {
    nums: number[],
    target: number
}

const twoSum = function ({ nums, target }: TwoSumParam) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1];
        }
    }

    return [];
};

/**
 * Testcase: 
 * 
 */
const nums = [2, 7, 11, 15];
const target = 9;

console.log({ result: twoSum({ nums, target }) })