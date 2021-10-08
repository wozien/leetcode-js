/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(), p = dummy

    while(l1 !== null && l2 !== null) {
        if(l1.val > l2.val) {
            p.next = l2
            l2 = l2.next
        } else {
            p.next = l1
            l1 = l1.next
        }
        p = p.next
    }
    p.next = l1 === null ? l2 : l1
    return dummy.next
};
// @lc code=end

