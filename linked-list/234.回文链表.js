/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var reverse = function(head) {
    let pre = null, cur = next = head
    while(cur !== null) {
        next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = slow = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    if(fast) slow = slow.next

    let right = reverse(slow), left = head
    while(right) {
        if(right.val !== left.val) return false
        right = right.next
        left = left.next
    }
    return true
};
// @lc code=end

