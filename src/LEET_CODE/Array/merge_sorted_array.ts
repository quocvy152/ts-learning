function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let idxN = 0;
    for(let i = m; i < m + n; i++) {
        nums1[i] = nums2[idxN];
        idxN++;
    }
    
    // // Approach 1:
    // nums1.sort((a, b) => a - b);

    // Approach 2:
    for(let i = 0; i < nums1.length - 1; i++) {
        let min = nums1[i];
        let idxMin = i;

        for(let j = i; j < nums1.length; j++) {
            if(nums1[j] < min) {
                min = nums1[j];
                idxMin = j;
            }
        }

        let temp = nums1[i];
        nums1[i] = nums1[idxMin];
        nums1[idxMin] = temp;
    }
    console.log({ nums1 });
};

/**
    Example 1:
        Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
        Output: [1,2,2,3,5,6]
        Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
        The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

    Example 2:
        Input: nums1 = [1], m = 1, nums2 = [], n = 0
        Output: [1]
        Explanation: The arrays we are merging are [1] and [].
        The result of the merge is [1].

    Example 3:
        Input: nums1 = [0], m = 0, nums2 = [1], n = 1
        Output: [1]
        Explanation: The arrays we are merging are [] and [1].
        The result of the merge is [1].
 */
merge([1,2,3,0,0,0], 3, [2,5,6], 3);