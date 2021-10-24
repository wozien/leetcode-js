/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var rob = function(root) {
    const res = dp(root)
    return Math.max(res[0], res[1])
};

// dp 返回一个数组表示抢和不抢root结点的最大金额
var dp = function(root) {
    if(root === null) return [0, 0]
    let left = dp(root.left)
    let right = dp(root.right)
    let a = root.val + left[1] + right[1]
    let b = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    return [a, b]
}
// @lc code=end

