const PriorityQueue = require('../priority-queue')

describe('priority queue', () => {
    test('init values', () => {
        const values = [1, 2, 3]
        const queue = new PriorityQueue(values)
        expect(queue.values).toEqual(values)
    })
})