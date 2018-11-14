const assert = require('chai').assert
/*

    4
   / \
  2   5
 / \   \
1   3   6

inOrderTraversal: 1,2,3,4,5,6
preOrderTraversal: 4,2,1,3,5,6
postOrderTraversal: 1,3,2,6,5,4

*/

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insertNode(val) {
    const node = new Node(val)
    if (this.root === null) this.root = node
    else {
      let current = this.root
      while(current) {
        if()
      }
    }
    }
  }
}
