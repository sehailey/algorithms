var numJewelsInStones = function(J, S) {
  let count = 0
  const JArr = J.split("").sort()
  const SArr = S.split("").sort()

  for (let s = 0; s < SArr.length; s++) {
    for (let j = 0; j < JArr.length; j++) {
      if (SArr[s] !== JArr[j]) continue
      count++
    }
  }
  return count
}
module.exports = [numJewelsInStones]
