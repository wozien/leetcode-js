/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    const memo = Array(word1.length).fill().map(() => Array(word2.length))
    // 表示word1[0...i]和word2[0...j]最小编辑距离
    function dp(i, j) {
        if(i == -1) return j + 1
        if(j == -1) return i + 1

        if(memo[i][j] != null) return memo[i][j]

        if(word1[i] === word2[j]) {
            return dp(i-1, j-1)
        } else {
            memo[i][j] = Math.min(
                dp(i, j-1) + 1,  // 插入
                dp(i-1, j) + 1,  // 删除
                dp(i-1, j-1) + 1 // 替换
            )
            return memo[i][j]
        }
    }
    return dp(word1.length - 1, word2.length - 1)
};

// 自底向上迭代
var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length
    // dp[i][j] 表示 word1[0..i-1]和word2[0..j-1]的最小编辑距离
    const dp = Array(m+1).fill().map(() => Array(n+1))

    for(let i = 0; i <= m; i++) {   
        dp[i][0] = i
    }
    for(let j = 0; j <= n; j++) {
        dp[0][j] = j
    }

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <=n; j++) {
            if(word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i -1 ][j - 1] + 1
                )
            }
        }
    }
    return dp[m][n]
    
};
// @lc code=end

