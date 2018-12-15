const expect = require('chai').expect

const sockMerchant = array => {
  const hash = {}
  let result = 0
  array.map(num => {
    if (!hash[num]) hash[num] = 1
    else hash[num]++
  })
  Object.values(hash).map(sum => (result += Math.floor(sum / 2)))
  return result
}

describe('sockMerchant', () => {
  it('takes an array of numbers and returns the number of \'pairs\' for each number', () => {
    const socks = [1, 1, 2, 2, 3]
    const result = sockMerchant(socks)
    expect(result).to.equal(2)
  })
})

const countValleys = (n, s) => {
  let stepMap = { U: +1, D: -1 }
  let steps = s.split('')
  let level = 0
  let valleyCount = 0
  steps.map(step => {
    level += stepMap[step]
    if (level === 0 && step === 'U') valleyCount++
  })
  return valleyCount
}
describe('Counting valleys', () => {
  it('', () => {
    const result = countValleys(8, 'UDDDUDUU')
    expect(result).to.equal(1)
  })

  it('', () => {
    const result = countValleys(12, 'DDUUDDUDUUUD')
    expect(result).to.equal(2)
  })
})

const clouds = (n, c) => {
  let jumps = 0
  for (let i = 0; i < c.length - 1; i++, jumps++) {
    if (c[i + 2] === 0) i++
  }
  return jumps
}

describe('clouds', () => {
  it('', () => {
    const result = clouds(7, [0, 0, 1, 0, 0, 1, 0])
    expect(result).to.equal(4)
  })

  it('', () => {
    const result = clouds(13, [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0])
    expect(result).to.equal(7)
  })

  it('', () => {
    const result = clouds(2, [0, 0])
    expect(result).to.equal(1)
  })
})

const hourglass = arr => {
  let sum
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
      let middle = arr[i + 1][j + 1]
      let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      let total = top + middle + bottom
      if (!sum || total > sum) sum = total
    }
  }
  return sum
}

describe('hourglass', () => {
  it('', () => {
    const arr = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0]
    ]

    const result = hourglass(arr)
    expect(result).to.equal(19)
  })
})

const rotLeft = (a, d) => {
  return a.slice(d, a.length).concat(a.slice(0, d))
}

describe('rotLeft', () => {
  it('', () => {
    const result = rotLeft([1, 2, 3, 4, 5], 2)
    expect(result).to.deep.equal([3, 4, 5, 1, 2])
  })
})

const bribe = q => {
  let result = 0
  let tooChaotic = false
  for (let i = 0; i < q.length; i++) {
    let loc = i
    let oldLoc = q[i] - 1

    //console.log('is at', loc, 'supposed to be at', oldLoc)
    const locDiff = oldLoc - loc
    //console.log('result + locDiff = ', result, locDiff, result + locDiff)
    if (locDiff > 2) tooChaotic = true
    else if (locDiff > 0) result += locDiff
  }
  if (tooChaotic) {
    console.log('Too chaotic')
    return 'Too chaotic'
  } else {
    console.log(result)
    return result
  }
}

describe('bribe', () => {
  it('', () => {
    const result = bribe([2, 1, 5, 3, 4])
    expect(result).to.equal(3)
  })

  it('returns too chaotic if it\'s not possible', () => {
    const result = bribe([2, 5, 1, 3, 4])
    expect(result).to.equal('Too chaotic')
  })
})
