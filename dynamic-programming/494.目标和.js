/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    if(nums.length === 0) return 0
    let sum = nums.reduce((pre, cur) => pre + cur)
    if(sum + target < 0 || (sum + target) % 2) return 0

    // 背包问题求子集
    function subsets(nums, sum) {
        let n = nums.length
        // dp[i][j] 表示前i数中的合为sum的总数
        let dp = Array(n + 1).fill().map(() => Array(sum + 1).fill(0))
        dp[0][0] = 1

        for(let i = 1; i <=n ; i++) {
            let num = nums[i - 1]
            for(let j = 0; j <= sum; j++) {
                dp[i][j] = dp[i - 1][j]
                if(j >= num) {
                    dp[i][j] += dp[i - 1][j - num]
                }
            }
        }
        return dp[n][sum]
    }

    return subsets(nums, (sum + target) / 2)
};
// @lc code=end

