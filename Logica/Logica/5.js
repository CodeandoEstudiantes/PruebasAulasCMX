function closestToZero(...nums) {
    let closest = 0
    for (let i = 0; i < nums.length; i++) {
        if (closest === 0) {
            closest = nums[i]
        } else if (nums[i] > 0 && nums[i] <= (closest)) {
            closest = nums[i]
        } else if (nums[i] < 0 && -nums[i] < (closest)) {
            closest = nums[i]
        }
    }
    return closet
};