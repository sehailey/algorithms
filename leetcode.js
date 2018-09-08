// var numJewelsInStones = function(J, S) {
//   let count = 0
//   const JArr = J.split("").sort()
//   const SArr = S.split("").sort()
//
//   for (let s = 0; s < SArr.length; s++) {
//     for (let j = 0; j < JArr.length; j++) {
//       if (SArr[s] !== JArr[j]) continue
//       count++
//     }
//   }
//   return count
// }

var numJewelsInStones = function(J, S) {
  let count = 0

  for (let s = 0; s < S.length; s++) {
    if (J.indexOf(S[s]) !== -1) count++
  }
  return count
}

const uniqueMorseRepresentations = function(words) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ]
  const alph = "abcdefghijklmnopqrstuvwxyz".split("")
  const translation = words.map(word => {
    return word
      .split("")
      .map(char => morse[alph.indexOf(char)])
      .join("")
  })

  const transformations = []
  translation.map(ind => {
    if (!transformations.includes(ind)) transformations.push(ind)
  })

  return transformations.length
}

module.exports = [numJewelsInStones, uniqueMorseRepresentations]
