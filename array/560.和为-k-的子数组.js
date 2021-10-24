/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 * 前缀和 + hash
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let sum = 0, res = 0, countMap = {}
    countMap[0] = 1
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        let need = sum - k
        if(countMap[need] !== undefined) res += countMap[need]
        countMap[sum] = (countMap[sum] || 0) + 1
    }
    return res
};
// @lc code=end

