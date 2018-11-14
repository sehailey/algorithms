const assert = require("chai").assert
const [numJewelsInStones] = require("../leetcode")

describe("numJewelsInStones", () => {
  it("takes two arguments and returns a number", () => {
    assert.equal(numJewelsInStones.length, 2)
    const jis = numJewelsInStones("aAbB", "CCasBC")
    assert.isNumber(jis)
  })

  it("returns the number of letters in S that are included in J", () => {
    const j = numJewelsInStones("aA", "aAAbb")
    assert.equal(j, 3)
    const j2 = numJewelsInStones("a", "b") // 0
    assert.equal(j2, 0)
    const j3 = numJewelsInStones("a", "aabaaaaa") // 7
    assert.equal(j3, 7)
    const j4 = numJewelsInStones("aA", "BCcaBaACaaDaB") // 6
    assert.equal(j4, 6)
  })
})
