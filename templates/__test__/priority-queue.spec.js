const { MaxPriorityQueue, MinPriorityQueue } = require('../priority-queue')

describe('priority queue', () => {
    describe('max priority queue', () => {
        test('test queue size', () => {
            const queue = new MaxPriorityQueue()
            expect(queue.isEmpty()).toBeTruthy()
            queue.enqueue(1)
            expect(queue.size).toBe(1)
            expect(queue.isEmpty()).toBeFalsy()
            queue.dequeue()
            expect(queue.size).toBe(0)
            expect(queue.isEmpty()).toBeTruthy()
        })

        test('correctly enqueue with primer number', () => {
            const arr = [1, 2, 5, 11]
            const queue = new MaxPriorityQueue()
            for(let val of arr) {
                queue.enqueue(val)
            }
            let res = []
            while(!queue.isEmpty()) {
                const { element } = queue.dequeue()
                res.push(element)
            }
            expect(res).toEqual([11, 5, 2, 1])
        })

        test('correctly enqueue ele with priority', () => {
            const arr = [{val: 1}, {val: 2}, {val: 5}]
            const queue = new MaxPriorityQueue()
            for(let ele of arr) {
                queue.enqueue(ele, ele.val)
            }

            const { element, priority } = queue.dequeue()
            expect(element).toBe(arr[2])
            expect(priority).toBe(5)
        })
    })

    describe('min priority queue', () => {
        test('test queue size', () => {
            const queue = new MinPriorityQueue()
            expect(queue.isEmpty()).toBeTruthy()
            queue.enqueue(1)
            expect(queue.size).toBe(1)
            expect(queue.isEmpty()).toBeFalsy()
            queue.dequeue()
            expect(queue.size).toBe(0)
            expect(queue.isEmpty()).toBeTruthy()
        })

        test('correctly enqueue with primer number', () => {
            const arr = [11, 2, 5, 1]
            const queue = new MinPriorityQueue()
            for(let val of arr) {
                queue.enqueue(val)
            }
            let res = []
            while(!queue.isEmpty()) {
                const { element } = queue.dequeue()
                res.push(element)
            }
            expect(res).toEqual([1, 2, 5, 11])
        })

        test('correctly enqueue ele with priority', () => {
            const arr = [{val: 5}, {val: 2}, {val: 1}]
            const queue = new MinPriorityQueue()
            for(let ele of arr) {
                queue.enqueue(ele, ele.val)
            }

            const { element, priority } = queue.dequeue()
            expect(element).toBe(arr[2])
            expect(priority).toBe(1)
        })
    })
})