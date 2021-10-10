/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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

let sum

var convertBST = function(root) {
  sum = 0
  traverse(root)
  return root
};

var traverse = function(root, init = 0) {
  if(root === null) return 0
  traverse(root.right)
  sum += root.val
  root.val = sum
  traverse(root.left)
}

// @lc code=end

