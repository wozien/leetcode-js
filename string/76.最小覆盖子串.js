/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *  滑动窗口
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if(s.length < t.length) return ''
    let need = {}, win = {}
    let left = right = 0, valid = 0
    let start = 0, len = Infinity

    for(let c of t) need[c] = (need[c] || 0) + 1
    let count = Object.keys(need).length

    while(right < s.length) {
        let c = s[right]
        right++
        if(need[c]) {
            win[c] = (win[c] || 0) + 1
            if(win[c] === need[c]) valid++
        }
        
        while(valid === count) {
            if(right - left < len) {
                start = left
                len = right - left
            }
            c = s[left]
            left++
            if(need[c]) {
                if(win[c] === need[c]) valid--
                win[c]--
            }   
        }
    }

    return len === Infinity ? '' : s.substr(start, len)
};
// @lc code=end

