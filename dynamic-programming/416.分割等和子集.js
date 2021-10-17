/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 * 子集背包问题
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let sum = nums.reduce((pre, cur) => pre + cur)
    if(sum % 2) return false
    let n = nums.length
    sum = sum / 2
    let dp = Array(n+1).fill().map(() => Array(sum+1))

    for(let i = 0; i <= n; i++) dp[i][0] = true
    for(let j = 0; j <=sum; j++) dp[0][j] = false

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= sum; j++) {
            if(j < nums[i - 1]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j -  nums[i - 1]]
            }
        }
    }

    return dp[n][sum]
};
// @lc code=end

