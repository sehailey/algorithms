const LinkedList = require("./LinkedList")

const ll = new LinkedList()

ll.addToTail(3)
ll.addToTail(4)
ll.addToHead(2)
ll.addToHead(1)
ll.addToTail(5)

console.log("\nlinked list:\n")
console.log(ll)

console.log("\nlist search for 3\n")
console.log(ll.search(3))

console.log("\nremove 1 from head, then search for 3\n")
ll.removeFromHead()
console.log(ll)

console.log("\nremove from tail, then search for 3\n")
ll.removeFromTail()
console.log(ll.search(3))
