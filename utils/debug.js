var findTargetSumWays = function(nums, target) {
    if(nums.length === 0) return 0
    let sum = nums.reduce((pre, cur) => pre + cur)
    if(sum < target || (sum + target) % 2) return 0

    // 背包问题求子集
    function subsets(nums, sum) {
        let n = nums.length
        // dp[i][j] 表示前i数中的合为sum的总数
        let dp = Array(n + 1).fill().map(() => Array(sum + 1).fill(0))

        for(let i = 0; i <= n; i++) dp[i][0] = 1

        for(let i = 1; i <=n ; i++) {
            for(let j = 0; j <= sum; j++) {
                if(j >= nums[i-1]) {
                    dp[i][j] = dp[i-1][j] + dp[i-1][j - nums[i-1]]
                } else {
                    dp[i][j] = dp[i-1][j] 
                }
                
            }
        }
        return dp[n][sum]
    }

    return subsets(nums, (sum + target) / 2)
};

findTargetSumWays([0, 1], 1)