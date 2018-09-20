/**********************************************
URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
***********************************************/
const URLify = string => {
  return string.split(" ").join("%20")
}

console.log(URLify("Mr John Smith"))

/******************************************
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. The palindrome does not need to be limited to just dictionary words.
******************************************/

const paliPer = string => {
  if (string.length === 2 && string[0] !== string[1]) return false
  let l
  const letterCount = {}
  let palindromeSum = 0
  for (let i = 0; i < string.length; i++) {
    letterCount[l] = letterCount[l] || 0
    letterCount[l]++
  }
  for (let letter in letterCount) {
    if (letterCount.hasOwnProperty(letter)) {
      palindromeSum += letterCount[letter] % 2
    }
  }
  return palindromeSum < 2
}

console.log(paliPer("taco cat")) // true
console.log(paliPer("ta")) //false
