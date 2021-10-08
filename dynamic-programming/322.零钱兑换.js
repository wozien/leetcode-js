/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
     // dp[n] 表示n元金额至少需要多个数量的币值
  const dp = Array(amount + 1).fill(amount + 1)
  dp[0] = 0

  for(let i = 1; i <= amount; i++) {
      for(let val of coins) {
          if(i - val < 0) continue
          dp[i] = Math.min(dp[i], dp[i-val] + 1)
      }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount]
};
// @lc code=end

