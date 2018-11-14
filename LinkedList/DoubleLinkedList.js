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

    addToHead(value) {
        const newNode = new Node(value)
        const oldHead = this.head

        if (oldHead) {
            newNode.next = oldHead
            oldHead.previous = newNode
        } else {
            this.tail = newNode
        }
        this.head = newNode
    }
    addToTail(value) {
        const newNode = new Node(value)
        const oldTail = this.tail
        if (oldTail) {
            newNode.previous = oldTail
            oldTail.next = newNode
        } else {
            this.head = newNode
        }
        this.tail = newNode
    }
    removeHead() {
        if (!this.head) return null
        let value = this.head.value
        this.head = this.head.next
        if (this.head) this.head.previous = null
        else this.tail = null

        return value
    }

    removeTail() {
        if (!this.tail) return null
        let value = this.tail.value
        this.tail = this.tail.previous
        if (this.tail) this.tail.next = null
        else this.head = null
        return value
    }
    search(value) {
        let node = this.head
        while (node) {
            if (node.value === value) return node
            else node = node.next
        }
    }

    delete(value) {
        if (this.head.value === value || !this.head.next) return null
        const nodeToDelete = this.search(value)
        console.log(nodeToDelete)
        if (nodeToDelete) {
            nodeToDelete.previous.next = nodeToDelete.next
            nodeToDelete.next.previous = nodeToDelete.previous
        }
    }
}

module.exports = DoubleLinkedList
