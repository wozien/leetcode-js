/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 * 滑动窗口
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  let len1 = s.length, len2 = p.length
  if(len1 < len2) return []
  let need = {}, win = {}
  let left = right = 0, valid = 0
  
  for(let c of p) need[c] = (need[c] || 0) + 1
  let count = Object.keys(need).length, res = []

  while(right < len1) {
      let c = s[right]
      right++
      if(need[c]) {
          win[c] = (win[c] || 0) + 1
          if(win[c] === need[c]) valid++
      }

      while(right - left >= len2) {
          if(valid === count) res.push(left)
          c = s[left]
          left++
          if(need[c]) {
              if(win[c] === need[c]) valid--
              win[c]--
          }
      }
  }
  return res
};
// @lc code=end

