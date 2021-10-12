/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var advantageCount = function(nums1, nums2) {
    const maxQueue = new MaxPriorityQueue()
    nums2.forEach((val, i) => {
        maxQueue.enqueue([i, val], val)
    })
    nums1.sort((a,b) => a - b)

    let l = 0, r = nums1.length - 1, res = []

    while(!maxQueue.isEmpty()) {
        const { element } = maxQueue.dequeue()
        const [index, maxVal] = element
        if(nums1[r] > maxVal) {
            res[index] = nums1[r]
            r--
        } else {
            res[index] = nums1[l]
            l++
        }
    }

    return res
}
// @lc code=end

