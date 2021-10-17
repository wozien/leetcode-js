/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 *  * 股票问题dp模板
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
    let dp = Array(n).fill().map(() => Array(3).fill().map(() => Array(2).fill(0)))
    dp[0][1][0] = 0, dp[0][1][1] = -prices[0]
    dp[0][2][0] = 0, dp[0][2][1] = -prices[0]

    for(let i = 1; i< n; i++) {
        for(let k = 2; k >= 1; k--) {
            dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
            dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
        }
    }

    return dp[n-1][2][0]
};
// @lc code=end

