/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 * 单调栈
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let res = [], stack = []
    let top = () => stack[stack.length - 1]
    let empty = () => stack.length === 0

    for(let i = temperatures.length - 1; i >= 0; i--) {
        let num = temperatures[i]
        while(!empty() && num >= temperatures[top()]) {
            stack.pop()
        }
        
        res[i] = empty() ? 0 : top() - i
        stack.push(i)
    }
    return res

};
// @lc code=end

