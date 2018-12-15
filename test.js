const assert = require('chai').assert

const solution = arr => {
  let count = 0
  let ordered = true
  for (let i = 0; i < arr.length; i++) {
    ordered = true
    // new strategy: create array with each i missing, and if the array is still sorted, count ++
    let tmp = arr.slice(0, i).concat(arr.slice(i + 1))
    for (let j = 0; j < tmp.length - 1; j++) {
      console.log(tmp, tmp[j], tmp[j + 1], ordered, count)
      if (tmp[j + 1] < tmp[j]) {
        ordered = false
      }
    }
    console.log('end of Loop', ordered)
    if (ordered === true) count++
  }
  return count
}

describe('solution', () => {
  it('counts the number of items in an array that can be removed to make it non-decreasing', () => {
    let result = solution([3, 4, 5, 4])
    assert.equal(result, 2)
  })
  it('does this for longer examples', () => {
    let result = solution([1, 2, 3, 2, 3, 4])
    assert.equal(result, 2)
  })
})

// binary search tree test
function dsa(T, max) {
  //if(!T && !max) return -1
  // if(!T) return 0
  if (!max) max = 0

  let visible = 0

  if (T.x >= max) {
    visible++
    max = T.x
  }

  result = visible + solution(T.l, max) + solution(T.r, max)
}
