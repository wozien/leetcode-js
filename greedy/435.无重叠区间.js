/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 * 贪心 按区间结束时间排序
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
  if(intervals.length == 0) return 0
  intervals.sort((a, b) => a[1] - b[1])
  let count = 1, end = intervals[0][1]

  for(let item of intervals) {
      if(item[0] >= end) {
          count++
          end = item[1]
      }
  }

  return intervals.length - count
};
// @lc code=end

