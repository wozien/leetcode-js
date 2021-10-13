/**
 * 优先队列 / 二叉堆
 */

class PriorityQueue {
    constructor() {
        this.nodes = []
        this.len = 0
    }

    get size() {
        return this.len
    }

    enqueue(ele, priority) {
        if (priority === undefined && isNaN(+ele)) {
            throw new Error('error priority in element.')
        }
        const node = {
            element: ele,
            priority: priority ? +priority : +ele
        }
        this.nodes[++this.len] = node
        this._swim(this.len)
    }

    dequeue() {
        if (this.isEmpty()) return null
        const root = this.nodes[1]
        this._swap(1, this.len)
        this.nodes[this.len] = null
        this.len--
        this._sink(1)
        return root
    }

    isEmpty() {
        return this.len === 0
    }

    _swim(ch) {
        while (ch > 1) {
            const pt = Math.floor(ch / 2)
            if (!this._shouldSwap(pt, ch)) break
            this._swap(pt, ch)
            ch = pt
        }
    }

    _sink(pt) {
        while (2 * pt <= this.len) {
            const ch = this._getSwapChild(pt)
            if (!this._shouldSwap(pt, ch)) break
            this._swap(pt, ch)
            pt = ch
        }
    }

    _swap(i, j) {
        if(i == j) return
        const temp = this.nodes[i]
        this.nodes[i] = this.nodes[j]
        this.nodes[j] = temp
    }

    _shouldSwap(pt, ch) {
        const p1 = this.nodes[pt].priority
        const p2 = this.nodes[ch].priority
        return !this._compare(p1, p2)
    }

    _getSwapChild(pt) {
        const left = pt * 2
        const right = pt * 2 + 1

        if(right <= this.len && this._shouldSwap(left, right))
            return right

        return left
    }

    // overwrite method
    _compare() {
    }
}

class MaxPriorityQueue extends PriorityQueue {
    constructor() {
        super()
    }

    _compare(p1, p2) {
        return p1 > p2
    }
}

class MinPriorityQueue extends PriorityQueue {
    constructor() {
        super()
    }

    _compare(p1, p2) {
        return p1 < p2
    }
}

module.exports = {
    MaxPriorityQueue,
    MinPriorityQueue
}