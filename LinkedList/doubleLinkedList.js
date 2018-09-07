class Node {
  constructor(value, previous, next) {
    this.value = value
    this.previous = previous || null
    this.next = next || null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToHead(value) {}
  addToTail(value) {
    const newNode = new Node(value)
    const oldTail = this.tail
    this.tail = newNode
    if (oldTail) {
      newNode.previous = oldTail
      oldTail.next = newNode
    } else {
      this.head = newNode
    }
  }
  removeHead() {}
  removeTail() {}
  search(value) {}
}
module.exports = [Node, DoubleLinkedList]