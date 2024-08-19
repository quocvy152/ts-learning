function majorityElement(nums: number[]): number {
    if(!nums.length) 
        return 0;
    
    let listNumberOfAppearence = [];

    let repeated: number[] = [];

    for(let i = 0; i < nums.length; i++) {
        if(!repeated.includes(nums[i])) {
            listNumberOfAppearence.push({
                item: nums[i],
                numAppearence: nums.filter(num => num === nums[i]).length
            })

            repeated.push(nums[i])
        }
    }

    listNumberOfAppearence.sort((a, b) => b.numAppearence - a.numAppearence);
    
    return listNumberOfAppearence[0].item;
};

console.log({
    __res: majorityElement([2,2,1,1,1,2,2])
})