/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var minFallingPathSum = function(matrix) {
    let n = matrix.length
    let memo = Array(n).fill().map(() => Array(n))

    // 表示从matrix[i][j]开始的最小路径和
    function dp(i, j) {
        if(i === n - 1) return matrix[i][j]
        if(memo[i][j] != null) return memo[i][j]
        let res = dp(i + 1, j)
        if(j > 0) res = Math.min(res, dp(i + 1, j - 1))
        if(j < n - 1) res = Math.min(res, dp(i + 1, j + 1))
        memo[i][j] = res + matrix[i][j]
        return memo[i][j]
    }

    let res = Infinity
    for(let j = 0; j < n; j++) {
        res = Math.min(res, dp(0, j))
    }
    return res
};

var minFallingPathSum = function(matrix) {
    let n = matrix.length
    // dp[i][j] 表示从martix[i][j]开始的最小路径和
    let dp = Array(n).fill().map(() => Array(n)) 

    for(let i = n - 1; i >= 0; i--) {
        for(let j = 0; j < n; j++) {
            if(i === n - 1) {
                dp[i][j] = matrix[i][j]
                continue
            }
            let res = dp[i + 1][j]
            if(j > 0) res = Math.min(res, dp[i + 1][j - 1])
            if(j < n - 1) res = Math.min(res, dp[i + 1][j + 1])
            dp[i][j] = res + matrix[i][j]
        }
    }

    return dp[0].reduce((pre, cur) => Math.min(pre, cur), Infinity)
};
// @lc code=end

