const assert = require('chai').assert

const solution = a => {
  const arr = a.sort()

  while (arr.length > 1) {
    const tmp = arr.shift()
    console.log(tmp, arr[0])
    if (tmp < 0) continue
    if (arr[0] > tmp + 1) return tmp + 1
  }
  if (arr.length && arr[0] > 0) return arr[0] + 1
  return 1
}

describe('solution', () => {
  it('returns the smallest positive integer from an array that\'s missing', () => {
    const result = solution([1, 2, 4, 6, 3, 1])
    assert.equal(result, 5)
  })

  it('returns 1 if all numbers are negative', () => {
    const result = solution([-3, -1, -5, -4])
    assert.equal(result, 1)
  })

  it('returns the number following the largest number if all numbers are sequential', () => {
    const result = solution([1, 2, 3, 4, 5])
    assert.equal(result, 6)
  })
})


/* Challenge
Using the JavaScript language, have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, and determine the area of the largest square submatrix that contains all 1's. A square submatrix is one of equal width and height, and your program should return the area of the largest submatrix that contains only 1's. For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2, so your program should return the area which is 4. You can assume the input will not be empty.

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"0111", "1111", "1111", "1111"

Output:9


Input:"0111", "1101", "0111"

Output:1/*
