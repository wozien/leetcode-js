/*
 * @lc app=leetcode.cn id=1024 lang=javascript
 *
 * [1024] 视频拼接
 * 
 * 贪心/ dp
 */

// @lc code=start
/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
 var videoStitching = function(clips, time) {
  if(time === 0) return 0

  clips.sort((a,b) => {
      if(a[0] === b[0]) return b[1] - a[1]
      return a[0] - b[0]
  })

  let i = 0, n = clips.length, curEnd = nextEnd = 0, res = 0
  while(i < n && clips[i][0] <= curEnd) {
      while(i < n && clips[i][0] <= curEnd) {
          nextEnd = Math.max(nextEnd, clips[i][1])
          i++
      }
      curEnd = nextEnd
      res++
      if(curEnd >= time) return res
  }
  return -1
};


// dp[i] 表示 【0， i] 至少需要多少个区间
var videoStitching = function(clips, time) {
  let dp = new Array(time + 1).fill(Infinity - 1)
  dp[0] = 0

  for(let i = 1; i <= time; i++) {
      for(let clip of clips) {
          if(clip[0] < i && i <= clip[1]) {
              dp[i] = Math.min(dp[i], dp[clip[0]] + 1)
          }
      }
  }

  return dp[time] === Infinity - 1 ? - 1 : dp[time]
};
// @lc code=end

