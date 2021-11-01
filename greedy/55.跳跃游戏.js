/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
// 遍历更新能跳远的最远距离
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  let fastest = 0
  for(let i = 0; i < nums.length - 1; i++) {
      fastest = Math.max(fastest, i + nums[i])
      if(fastest <= i) return false
  }

  return fastest >= nums.length - 1
};
// @lc code=end

