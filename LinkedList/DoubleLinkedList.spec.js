const DoubleLinkedList = require("./DoubleLinkedList")

const dll = new DoubleLinkedList()

dll.addToTail(3)
dll.addToTail(4)
dll.addToHead(2)
dll.addToHead(1)
dll.addToTail(5)

console.log("\ndouble linked list:\n")
console.log(dll)

console.log("\nlist search for 3\n")
console.log(dll.search(3))

console.log("\nremove 1 from head, then search for 3\n")
dll.removeHead()
console.log(dll)

console.log("\nremove from tail, then search for 3\n")
dll.removeTail()
console.log(dll.search(3))

console.log("\ndelete 3\n")
dll.delete(3)
console.log(dll)
