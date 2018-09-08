const assert = require("chai").assert
const [Node, DoubleLinkedList] = require("../LinkedList/doubleLinkedList")

describe("Node", () => {
  let node
  beforeEach(() => {
    node = new Node("testValue")
  })
  it("takes 'value' as an argument and is initialized with 'next' and 'previous' as null", () => {
    assert.equal(node.value, "testValue")
    assert.equal(node.previous, null)
    assert.equal(node.next, null)
  })
})

describe("DoubleLinkedList", () => {
  let doubleLinkedList
  beforeEach(() => {
    doubleLinkedList = new DoubleLinkedList()
  })
  it("has methods `addToTail`, `addToHead`, `removeHead`, `removeTail`, and `search`", () => {
    assert.isFunction(doubleLinkedList.addToHead)
    assert.isFunction(doubleLinkedList.addToTail)
    assert.isFunction(doubleLinkedList.removeHead)
    assert.isFunction(doubleLinkedList.removeTail)
    assert.isFunction(doubleLinkedList.search)
  })

  it("starts with a head and tail that are null", () => {
    assert.isNull(doubleLinkedList.tail)
    assert.isNull(doubleLinkedList.head)
  })

  it("uses Node class to add nodes", () => {
    doubleLinkedList.addToTail("first")
    assert.instanceOf(doubleLinkedList.tail, Node)
  })

  it("returns the head on removeHead", () => {
    doubleLinkedList.addToHead("first")
    const oldHead = doubleLinkedList.removeHead()
    assert.equal(oldHead, "first")
  })
  it("returns the tail on removeTail")
  it("the head node always has prevous = null")
  it("the tail node always has next = null")
  it("returns the correct values for search")
  //the following function allows us to search for object keys inside of nodes rather than just flat values
  it("takes strings and functions as search inputs")
})
