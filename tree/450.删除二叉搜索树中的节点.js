/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
  if(!root) return null
  if(root.val === key) {
      if(root.left === null) return root.right
      if(root.right === null) return root.left
      let node = getMin(root.right)
      root.val = node.val
      root.right = deleteNode(root.right, node.val)
  } else if(root.val > key) {
      root.left = deleteNode(root.left, key)
  } else {
      root.right = deleteNode(root.right, key)
  }
  return root
};

var getMin = function(root) {
  while(root.left) root = root.left
  return root
}
// @lc code=end

