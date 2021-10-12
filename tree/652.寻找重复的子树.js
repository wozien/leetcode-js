/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 * 后序遍历+序列化
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
 let res, map

 var traverse = function(root) {
     if(root === null) return '#'
     let left = traverse(root.left)
     let right = traverse(root.right)
     let seri = left + ',' + right + ',' + root.val
     let count = map[seri] || 0
 
     if(count === 1) res.push(root)
     map[seri] = ++count
     return seri
 }
 
 /**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
     res = [], map = {}
     traverse(root)
     return res
 };
// @lc code=end

