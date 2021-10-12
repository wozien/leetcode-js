const { MaxPriorityQueue } = require('@datastructures-js/priority-queue')

var advantageCount = function(nums1, nums2) {
    const maxQueue = new MaxPriorityQueue()
    nums2.forEach((val, i) => {
        maxQueue.enqueue([i, val], val)
    })
    nums1.sort()

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

advantageCount([2,7,11,15], [1,10,4,11])