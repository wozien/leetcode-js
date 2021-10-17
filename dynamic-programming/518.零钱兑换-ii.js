/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    let n = coins.length
    let dp = Array(n + 1).fill().map(() => Array(amount + 1).fill(0))
    for(let i = 0; i <=n; i++) dp[i][0] = 1
    for(let j = 0; j <= amount; j++) dp[0][j] = 0

    for(let i = 1; i <= n; i++) {
        let coin = coins[i - 1]
        for(let j = 1; j <= amount; j++) {
            dp[i][j] = dp[i - 1][j]
            if(j >= coin) {
                dp[i][j] += dp[i][j - coin]
            }
        }
    }
    
    return dp[n][amount]

};
// @lc code=end

