/*************************************
    MERGE SORT
 *************************************/

// compare the arrays item by item and return the concatenated result
const merge = (left, right) => {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

// Split the array into halves and merge them recursively
const mergeSort = arr => {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(mergeSort(left), mergeSort(right))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

/*************************************
    HEAP SORT
 *************************************/

// const Node = value => {
//   this.value = value
//   this.left = null
//   this.right = null
// }
//
// const makeTree = arr => {
//   const root = Node(arr.shift())
//   arr.map(value => {
//     if (value < root.value) {
//       root.left = makeTree(value)
//     } else {
//       root.right = makeTree(value)
//     }
//   })
//   return root
// }

const buildHeap = ipnut => {
  const arrLength = arr.length
  for (let i = Math.floor(arrLength / 2); i >= 0; i--) {
    heapify(input, i)
  }
}

const heapify = (input, i) => {
  const left = i * 2 + 1
  const right = i * 2 + 2
  let largest = i

  if (left < arrLength && input[left] > input[greatest]) {
    largest = left
  }

  if (right < arrLength && input[right] > input[greatest]) {
    largest = right
  }

  if (largest !== i) {
    swap(input, i, largest)
    heapify(input, largest)
  }
}

const swap = (input, index_A, index_B) => {
  let tmp = input[index_A]
  index_A = input[index_B]
  index_B = tmp
}

const heapSort = input => {
  buildHeap(input)

  for (let i = 0; i < array.length; i++) {
    swap(input, 0, i)
    arrLength--
    heapify(input, 0)
  }
}

/*************************************
    BINARY SEARCH
 *************************************/
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

const test = [1, 3, 5, 6, 8, 9]
console.log(binarySearch(test, 9))

/*************************************
    BUBBLE SORT
 *************************************/
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
}

/*************************************
    BINARY SEARCH
 *************************************/
