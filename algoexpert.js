const assert = require('chai').assert
/*
Two Number Sum
​
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.
​
Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
Sample output: [-1, 11]

​*/

const tns = (arr, target) => {
  // if I subtract each number in the array from the target and store those as keys, then I can search for keys that equal numbers in the array

  //sort array so that answers are always the same

  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if (obj[arr[i]]) return [obj[arr[i]], arr[i]].sort((a, b) => a - b)
    else obj[diff] = arr[i]
  }
  return []
}
describe('tns', () => {
  it('takes in a non-empty array of distinct integers and an integer representing a target sum.\nit returns two numbers from the array if they sum up to the target sum', () => {
    const result = tns([4, 1, 2], 3)
    assert.deepEqual(result, [1, 2])

    const result2 = tns([3, 5, -4, 8, 11, 1, -1, 6], 10)
    assert.deepEqual(result2, [-1, 11])
  })

  it('returns an empty array if no matches are found', () => {
    const result = tns([1, 2], 5)
    assert.deepEqual(result, [])
  })
})

/*
three number sum
*/

//
// const thns = (arr, target) => {
//   // for this problem I'm wondering if I can extract the 'map' function into two parts instead of just one, so make the map object but then loop through the array again and making a new map object that has keys that are the third number making up the sum.
//
//   /* example:
// let obj = {
//   3: {4: 5},
//   2: {4: 6}
//   }
//   */
//
//   let results = []
//
//   for (let i = 0; i < arr.length; i++) {
//     const diff = target - arr[i]
//     const tmpArr = arr.filter(n => n !== arr[i])
//     const subDiff = tns(tmpArr, diff)
//     //so now the tns should be done on diff
//
//     if (subDiff.length) {
//       const triplet = subDiff.concat(arr[i]).sort((a, b) => a - b)
//       if (!results.includes(triplet)) results.push(triplet)
//     }
//   }
//   return results
// }
// describe('thns', () => {
//   it('takes in a non-empty array of distinct integers and an integer representing a target sum.\nit returns all of the triplets that sum up to the target sum as a 2d array.', () => {
//     const result = thns([12, 3, 1, 2, -6, 5, -8, 6], 0)
//     const result2 = thns([1, 2, 3], 6)
//     assert.deepEqual(result, [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]])
//     assert.deepEqual(result2, [[1, 2, 3]])
//   })
// })

const smd = (arr1, arr2) => {
  let diff = 10000000
  let result = []
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      const tmp = Math.abs(arr2[i] - arr1[j])
      if (tmp < diff) {
        diff = tmp
        result = [arr1[j], arr2[i]]
      }
    }
  }
  return result
}
describe('smd', () => {
  it('takes two arrays and finds the pair of numbers from each that is closest to zero', () => {
    const result = smd([1, 2], [3, 4])
    assert.deepEqual(result, [2, 3])
    const result2 = smd([9], [1])
    assert.deepEqual(result2, [9, 1])
    const result3 = smd([5, 3], [5, 3])
    assert.deepEqual(result3, [5, 5])
  })
})

// const getCell = cell => {
//   if (cell) return cell
//   else return 0
// }
//
// const countCell = cell => {
//   if (cell === 1) {
//     cell = 0
//     return 1
//   }
//   return 0
// }
//
// const getNeighbors = cell => {
//
// }
// const river = arr => {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       const nei = arr[i][j]
//     }
//   }
// }
// describe('river', () => {
//   it('takes a 2D matrix of 0s and 1s and returns the sizes of all rivers, where a\nriver is any adjacent 1', () => {
//     const result = river([
//       [1, 0, 0, 1, 0],
//       [1, 0, 1, 0, 0],
//       [0, 0, 1, 0, 1],
//       [1, 0, 1, 0, 1],
//       [1, 0, 1, 1, 0]
//     ])
//
//     assert.deepEqual(result, [1, 2, 2, 2, 5])
//   })
// })

const tree = describe('bst', () => {
  it('takes a bst and a target and returns the node that contains the target value', () => {
    const result = bst(tree, 12)
    assert.equal(result, 13)
  })
})
