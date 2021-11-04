/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 * 回溯
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var canPartitionKSubsets = function(nums, k) {
  if(k > nums.length) return false
  let sum = 0
  for(let val of nums) sum+=val
  if(sum % k) return false
  const bukets = new Array(k).fill(0)
  return traverse(nums, 0, bukets, sum / k)
};

var traverse = function(nums, index, bukets, target) {
  if(index === nums.length) {
      for(let buket of bukets) {
          if(buket !== target) return false
      }
      return true
  }

  for(let i = 0; i < bukets.length; i++) {
     // 剪枝
      if(bukets[i] + nums[index] > target) continue
      bukets[i] += nums[index]
      if(traverse(nums, index + 1, bukets, target)) return true
      bukets[i] -= nums[index]
  }

  return false
}
// @lc code=end

