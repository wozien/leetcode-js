/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 * 差分数组
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    const diff = Array(n).fill(0)
    for(let [i, j, val] of bookings) {
        diff[i-1] += val
        if(j < n) diff[j] -= val
    }
    const res = [diff[0]]
    for(let i = 1; i < n; i++) {
        res[i] = res[i - 1] + diff[i]
    }
    return res
};
// @lc code=end

