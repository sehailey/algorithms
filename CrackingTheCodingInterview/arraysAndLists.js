const DoubleLinkedList = require('../LinkedList/DoubleLinkedList')
const LinkedList = require('../LinkedList/LinkedList')
const assert = require('chai')
  .assert /**********************************************
URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
***********************************************/
const URLify = string => {
  return string.split(' ').join('%20')
}

console.log(URLify('Mr John Smith'))

/******************************************
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. The palindrome does not need to be limited to just dictionary words.
******************************************/

const paliPer = string => {
  if (string.length === 2 && string[0] !== string[1]) return false
  let l
  const letterCount = {}
  let palindromeSum = 0
  for (let i = 0; i < string.length; i++) {
    letterCount[l] = letterCount[l] || 0
    letterCount[l]++
  }
  for (let letter in letterCount) {
    if (letterCount.hasOwnProperty(letter)) {
      palindromeSum += letterCount[letter] % 2
    }
  }
  return palindromeSum < 2
}

console.log(paliPer('taco cat')) // true
console.log(paliPer('ta')) //false

/**********************************************
Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7-) 1 -) 6) + (5 -) 9 -) 2) .Thatis,617 + 295.
Output: 2 -) 1 -) 9. That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE
Input: (6 -) 1 -) 7) + (2 -) 9 -) 5) . Thatis,617 + 295 .
Output: 9 -) 1 -) 2. That is, 912.
Hints: #7, #30, #71, #95, #109
*************************************************/
const addTwoReverseLinkedLists = (L1, L2) => {
  const getDigits = list => {
    let place = 1
    let num = 0
    let node = list.head
    while (node) {
      const digit = list.removeHead()
      num += digit * place
      place *= 10
      node = node.next
    }
    return num
  }

  let n1 = getDigits(L1)
  let n2 = getDigits(L2)

  return n1 + n2
}

describe('addTwoReverseLinkedLists', () => {
  let list1, list2
  beforeEach(() => {
    list1 = new DoubleLinkedList()

    list2 = new DoubleLinkedList()
  })

  it('returns the sum of two linked lists where each node is an integer, the head = the ones place', () => {
    list1.addToHead(1)
    list1.addToHead(2)
    list1.addToHead(3)

    list2.addToHead(4)
    list2.addToHead(5)
    list2.addToHead(6)
    let result = addTwoReverseLinkedLists(list1, list2)
    assert.equal(result, 579)
  })

  it('returns the sum of two linked lists where each node is an integer, the head = the ones place', () => {
    list1.addToTail(1)
    list1.addToTail(2)
    list1.addToTail(3)

    list2.addToTail(4)
    list2.addToTail(5)
    list2.addToTail(6)
    let result = addTwoReverseLinkedLists(list1, list2)
    assert.equal(result, 975)
  })
})

/* Palindrome: Implement a function to check if a linked list is a palindrome. */

const listPali = list => {
  let tmpHead = list.head
  let tmpTail = list.tail
  while (tmpHead !== tmpTail) {
    if (tmpHead.value === tmpTail.value) {
      tmpHead = tmpHead.next
      tmpTail = tmpTail.previous
    } else return false
  }
  return true
}
describe('listPali', () => {
  it('takes a linked list and returns true if it is a palindrome', () => {
    let list = new DoubleLinkedList()
    list.addToTail(1)
    list.addToTail(2)
    list.addToTail(1)

    assert.equal(listPali(list), true)

    list.removeTail()
    assert.equal(listPali(list), false)
  })
})

/*
Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.
*/

describe('listsIntersect', () => {
  it('I don\'t know what this means', () => {
    let list = new LinkedList()
    list.addToTail(1)
    list.addToTail(2)
    list.addToTail(3)

    let list2 = new LinkedList()
    list2.addToTail(3)
    list2.addToTail(4)
    list2.addToTail(5)
  })
})

/******************************************
2.8 Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

EXAMPLE
Input: A -) B -) C -) 0 -) E - ) C[thesameCasearlierl
Output: C
********************************************/

const findLoop = list => {
  let visited = []
  let node = list.head
  while (node) {
    visited.push(node)
    node = node.next
    if (visited.includes(node)) {
      return node
    }
  }
}

describe('findLoop', () => {
  it('takes a list as an argument and returns a node if it is referenced as the next of a later node', () => {
    let list = new DoubleLinkedList()
    list.addToTail(1)
    list.addToTail(2)
    list.addToTail(3)
    list.head.next.next.next = list.head.next

    let loopBegin = findLoop(list)

    assert.equal(loopBegin.value, 2)
  })
})

/* Implementing a stack */

class Stack {
  constructor() {
    this.data = []
    this.top = null
  }

  push(val) {
    const tmp = [val]
    this.data = tmp.concat(this.data)
    console.log(this.data)
  }

  pop() {
    const tmp = this.data[0]
    this.data = this.data.slice(1)
    return tmp
  }

  peek() {
    return this.data[0]
  }

  isEmpty() {
    return this.data.length === 0
  }
}

describe('Stack', () => {
  it('push(i) pushes i into the stack', () => {
    let stack = new Stack()
    stack.push(2)
    assert.equal(stack.data, 2)
    //assert.equal not giving correct results for arrays
  })
  it('pop() returns the first item in the stack', () => {
    let stack = new Stack()
    stack.push(1)
    stack.push(2)
    let tmp = stack.pop()
    assert.equal(tmp, 2)
  })
})
