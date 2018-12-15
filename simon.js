const expect = require('chai').expect

const findDistinct = (a, k) => {
  let track = {}
  let pairs = {}
  for (let i = 0; i < a.length; i++) {
    const ele = a[i]
    const diff = k - ele
    if (track[ele]) {
      pairs[ele] = ele
    } else {
      track[diff] = ele
    }
  }
  return Object.keys(pairs).length
}

describe('findDistinct', () => {
  it('returns the distinct number of pairs that sum up to a target', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = findDistinct(arr, 5)
    expect(result).to.equal(2)
  })
  it('doesn\'t duplicate pairs', () => {
    const arr = [1, 2, 3, 4, 4, 5]
    const result = findDistinct(arr, 5)
    expect(result).to.equal(2)
  })
  it('doesn\'t duplicate reverse pairs', () => {
    const arr = [1, 2, 3, 4, 1, 5]
    const result = findDistinct(arr, 5)
    expect(result).to.equal(2)
  })
})

const uniqueElements = arr => {
  const sorted = arr.sort()
  const track = {}
  for (let i = 0; i < sorted.length; i++) {
    let ele = sorted[i]
    if (!track[ele]) track[ele] = 1
    else {
      while (track[ele] !== undefined) {
        ele++
        if (!track[ele]) {
          track[ele] = 1
          break
        }
      }
    }
  }
  return Object.keys(track).reduce((a, b) => parseInt(a) + parseInt(b))
}

describe('uniqueElements', () => {
  it('returns the sum of an array with unique numbers by incrementing each one if it has a dup', () => {
    const arr = [1, 2, 3, 3]
    const result = uniqueElements(arr)
    expect(result).to.equal(10)
  })
})

const maxChar = string => {
  let split = string.split('')
  let mostFreqChar = ''
  let max = 0
  let result = {}
  for (let i = 0; i < split.length; i++) {
    const char = split[i]
    if (!result[char]) {
      result[char] = 1
    } else {
      result[char]++
      if (result[char] > max) {
        mostFreqChar = char
        max = result[char]
      }
    }
  }
  return mostFreqChar
}

describe('maxChar', () => {
  it('takes a string and returns the greatest occurence', () => {
    const result = maxChar('helloworld')
    expect(result).to.equal('l')
  })

  it('returns the first occurrence if there is a tie', () => {
    const result = maxChar('llleee')
    expect(result).to.equal('l')
  })

  it('returns empty string if it receives an empty string', () => {
    const result = maxChar('')
    expect(result).to.equal('')
  })
})
