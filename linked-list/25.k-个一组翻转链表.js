/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * 迭代反转一部分的链表
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
var reverse = function(start, end) {
    let pre = null, cur = next = start
    while(cur !== end) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head || !head.next) return head
    let start = end = head
    for(let i = 0; i < k; i++) {
        if(!end) return head
        end = end.next
    }
    let newHead = reverse(start, end)
    start.next = reverseKGroup(end, k)
    return newHead
};
// @lc code=end

