/*****************************************
Linked Lists

Complexity: O(n)

Benefit: can add and remove items from the beginning of the list in constant time.
*******************************************/

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToHead(value) {
    const oldHead = this.head
    const newNode = new Node(value)
    this.head = newNode
    if (oldHead) {
      newNode.next = oldHead
    } else {
      this.tail = newNode
    }
  }

  addToTail(value) {
    const oldTail = this.tail
    const newNode = new Node(value)
    this.tail = newNode
    if (oldTail) {
      oldTail.next = newNode
    } else this.head = newNode
  }

  removeFromHead() {
    this.head = this.head.next
  }

  removeFromTail() {
    let node = this.head
    while (node) {
      if (node.next === null) {
        this.tail = node
        node.next = null
      }
      node = node.next
    }
  }

  search(value) {
    let node = this.head
    while (node) {
      if (node.value === value) {
        return node
      } else node = node.next
    }
  }
}

module.exports = LinkedList
