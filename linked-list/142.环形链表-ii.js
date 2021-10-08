/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if(!head || !head.next) return null
    let fast = slow = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(fast === slow) break
    }

    if(!fast || !fast.next) return null
    slow = head
    while(fast !== slow) {
        slow = slow.next
        fast = fast.next
    }

    return fast
};
// @lc code=end

