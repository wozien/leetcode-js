/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 * 快慢指针问题
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
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head || !head.next) return false
    let fast = slow = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(fast === slow) return true
    }
    return false
};
// @lc code=end

