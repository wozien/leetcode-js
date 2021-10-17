/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    if(prices.length === 0) return 0
    let n = prices.length, maxK = k
    let dp = Array(n).fill().map(() => Array(k+1).fill().map(() => Array(2).fill(0)))

    for(let i = 0; i< n; i++) {
        for(let k = maxK; k >= 1; k--) {
            if( i === 0) {
                dp[0][k][0] = 0
                dp[0][k][1] = -prices[0]
                continue
            }
            dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
            dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
        }
    }

    return dp[n-1][k][0]
};
// @lc code=end

