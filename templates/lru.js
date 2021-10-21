class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.prev = this.next = null
  }
}

class DoubleList {
  constructor() {
    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this._size = 0
  }

  /**
   * 从链表末尾添加节点
   * @param {*} node 
   */
  addLast(node) {
    node.next = this.tail
    node.prev = this.tail.prev
    this.tail.prev.next = node
    this.tail.prev = node
    this._size++
  }

  /**
   * 删除节点
   * @param {*} node 
   */
  remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    this._size--
  }

  /**
   * 删除第一个节点，并且返回该节点
   * @returns 
   */
  removeFirst() {
    if(this.head.next === this.tail) return null
    const node = this.head.next
    this.remove(node)
    return node
  }

  get size() {
    return this._size
  }
}

class LRUCache {
  constructor(capacity) {
    // LRU 算法本质就是维护一个哈希双链表
    this.cap = capacity
    this.hashMap = {}
    this.linkList = new DoubleList()
  }

  get(key) {
    if(!this.hashMap[key]) {
      return -1
    }
    this._makeRecently(key)
    return this.hashMap[key].val
  }

  put(key, val) {
    if(this.hashMap[key]) {
      const node = this._makeRecently(key)
      node.val = val
      return
    }

    if(this.cap === this.linkList.size) {
      this._removeLeastRecently()
    }
    this._addRecently(key, val)
  }

  /**
   * 将某个key提升到最近使用
   * @param {*} key 
   */
  _makeRecently(key) {
    const node = this.hashMap[key]
    this.linkList.remove(node)
    this.linkList.addLast(node)
    return node
  }

  /**
   * 添加最近使用元素
   * @param {*} key 
   * @param {*} val 
   */
  _addRecently(key, val) {
    const node = new Node(key, val)
    this.linkList.addLast(node)
    this.hashMap[key] = node
  }

  /**
   * 删除某个key对于的node
   * @param {*} key 
   */
  _deleteKey(key) {
    const node = this.hashMap[key]
    this.linkList.remove(node)
    delete this.hashMap[key]
  }

  /**
   * 删除最久未使用
   */
  _removeLeastRecently() {
    const node = this.linkList.removeFirst()
    delete this.hashMap[node.key]
  }
}

module.exports = LRUCache