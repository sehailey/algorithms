```javascript
/*****************************************************************************
    BINARY SEARCH

    write a function that takes a sorted array of integers and a target
    integer. The function should use the Binary Search Algorithm to find
    the target number and should return its index, or -1 if it is not
    in the array.

 *****************************************************************************/
//O(log(n)) time | O(1) space
function binarySearch(array, target) {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (array[mid] === target) return mid
    if (array[mid] < target) left = mid + 1
    else right = mid - 1
  }
  return -1
}
```

I need to know these like the back of my hand. A good strategy will be to have
G quiz me on them!
