const DoubleLinkedList = require("./DoubleLinkedList")
const assert = require("chai").assert

describe("DoubleLinkedList", () => {
  let testList
  beforeEach(() => {
    testList = new DoubleLinkedList()
  })
  it("adds a node to the head when it's empty", () => {
    testList.addToHead(4)
    assert.equal(testList.head.value, 4)
    assert.equal(testList.head.previous, null)
    assert.equal(testList.head.next, null)
  })

  it("removes the head even when there's only one node", () => {
    testList.addToHead(4)
    testList.removeHead()
    assert.equal(testList.head, null)
  })

  it("returns the head value when calling removeHead", () => {
    testList.addToHead(4)
    assert.equal(testList.head.value, 4)
    testList.addToHead(3)
    assert.equal(testList.head.value, 3)
    testList.addToHead(6)
    let digit = testList.removeHead()
    assert.equal(digit, 6)
    assert.equal(testList.head.value, 3)
    assert.equal(testList.tail.value, 4)
    digit = testList.removeHead()
    assert.equal(digit, 3)
    assert.equal(testList.head.value, 4)
    assert.equal(testList.tail.value, 4)
  })

  it("returns the tail value when calling removeTail", () => {
    testList.addToTail(4)
    let digit = testList.removeTail()
    assert.equal(digit, 4)
  })
})
