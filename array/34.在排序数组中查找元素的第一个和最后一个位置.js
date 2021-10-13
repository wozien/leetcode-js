/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *  二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)]
};

// 搜索左边界
var searchLeft = function(nums, target) {
    let l = 0, r = nums.length
    while(l < r) {
        let m = (l + r) >> 1
        if(nums[m] >= target) {
            r = m
        } else {
            l = m + 1
        }
    }

    if(l === nums.length) return -1
    return nums[l] === target ? l : -1
}

// 搜索右边界
var searchRight = function(nums, target) {
    let l =0, r = nums.length
    while(l < r) {
        let m = (l + r) >> 1
        if(nums[m] <= target) {
            l = m + 1
        } else {
            r = m
        }
    }

    if(l === 0) return -1
    return nums[l - 1] === target ? l - 1 : -1
}
// @lc code=end

