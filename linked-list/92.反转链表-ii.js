/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let next = null

 /**
  * 反转链表的前n个节点
  * @param {*} head 
  * @param {*} n 
  * @returns 
  */
const reverseN = function(head, n) {
    if(n === 1) {
        next = head.next
        return head
    }
    let last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = next
    return last
}
 
 /**
  * @param {ListNode} head
  * @param {number} left
  * @param {number} right
  * @return {ListNode}
  */
 var reverseBetween = function(head, left, right) {
     if(left === 1) return reverseN(head, right)
     head.next = reverseBetween(head.next, left - 1, right - 1)
     return head
 };
// @lc code=end

