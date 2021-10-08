/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 *  递归 + 分治合并两两链表
 *  其他：用最小堆维护k个链表头节点最小值
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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let len = lists.length
    if(len == 0) return null

    let merge = (l, r) => {
        if(l == r) return lists[l]
        let mid = (l + r) >> 1
        let ll = merge(l, mid)
        let rr = merge(mid + 1, r)
        return mergeTwoLists(ll, rr)
    }
    return merge(0, len - 1)
};
// @lc code=end

