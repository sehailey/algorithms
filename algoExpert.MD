# algoexpert

## depth first search

```javascript
class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  depthFirstSearch(array) {
    array.push(this.name)
    this.children.forEach(child => child.depthFirstSearch(array))
    return array
  }
}
```

This was a fun problem, although a little intimidating! I immediately got nervous about the class syntax which made me realize I should brush up on it a bit. But these are the kinds of problems I really enjoy solving.
