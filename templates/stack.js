
class Stack {
    constructor() {
        this.data = []
    }

    get length() {
        return this.data.length
    }

    isEmpty() {
        return this.length === 0
    }

    top() {
        return this.data[this.length - 1]
    }

    push(val) {
        this.data.push(val)
    }

    pop() {
        return this.data.pop()
    }
}