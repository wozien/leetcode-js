/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
  const vis = new Array(26).fill(0)
  const nums = _.countBy(s)
  const res = []

  for(let c of s) {
      if(!vis[c.charCodeAt() - 'a'.charCodeAt()]) {
          while(res.length) {
              const t = res[res.length - 1]
              if(t > c && nums[t] > 0) {
                  vis[t.charCodeAt() - 'a'.charCodeAt()] = 0
                  res.pop()
              } else break
          }
          vis[c.charCodeAt() - 'a'.charCodeAt()] = 1
          res.push(c)
      }
      nums[c]--
  }

  return res.join('')
};
// @lc code=end

