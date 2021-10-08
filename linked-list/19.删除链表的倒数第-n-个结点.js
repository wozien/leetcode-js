/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 * 快慢指针
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let node = findFromEnd(dummy, n + 1)  // 找出倒数的n+1节点
    node.next = node.next.next
    return dummy.next
};

/**
 * 找出倒数的第k个节点
 * @param {ListNode} head 
 * @param {number} k 
 */
var findFromEnd = function(head, k) {
    let fast = slow = head
    let index = 0
    while(fast) {
        index++
        fast = fast.next   // 快指针先走k步
        if(index > k) {
            slow = slow.next
        }
    }
    return slow
}
// @lc code=end

