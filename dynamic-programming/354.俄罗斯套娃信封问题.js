/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
 var maxEnvelopes = function(envelopes) {
    // 按宽度升序，相等则按长度降序
    const heights = envelopes.sort((a, b) => {
        if(a[0] == b[0]) return b[1] - a[1]
        return a[0] - b[0]
    }).map(item => item[1])

    return lengthOfLIS(heights)
}; 

var lengthOfLIS = function(nums) {
    // dp[i] 以nums[i]结尾的最长子序列长度
    const dp = Array(nums.length).fill(1)
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return dp.reduce((pre, cur) => Math.max(pre, cur), 0)
};
// @lc code=end

