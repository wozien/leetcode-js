/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 * 股票问题dp模板
 * dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
 * dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k - 1][0] - prices[i])
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let n = prices.length

    let dp = Array(n).fill().map(() => Array(2))
    dp[0][0] = 0, dp[0][1] = -prices[0]

    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }

    return dp[n - 1][0]
};
// @lc code=end

