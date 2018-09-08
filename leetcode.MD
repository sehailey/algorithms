# leetcode

## numJewelsInStones

### solution one

```javascript
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
```

The time complexity of this is a disaster. According to leetcode, it was 96ms, which outperformed 6.7% of all submitted solutions. Ouch!

The arrays in the example were sorted, but I wasn't sure if I should assume they would be, so I sorted them. That added O(n log n) and O(m log m) to the time (not to mention, I used split, and I don't know how much time that took. And then I did a typical nested for loop where I looped through each element in S and checked if it was equal to each element in J. I'm not sure that 'continue' does anything here, so the time complexity is probably O(n \* m).

### solution 2

```javascript
var numJewelsInStones = function(J, S) {
  let count = 0

  for (let s = 0; s < S.length; s++) {
    if (J.indexOf(S[s]) !== -1) count++
  }
  return count
}
```

Well I feel kind of silly, now. There are so many improvements with this solution. First, no sorting! Second, indexOf is so powerful here and I really should be using it more. I have a feeling that this is a good way to approach these "does this array contain values from this other array" problems. I got conflicting evidence about the time complexity of indexOf, but looking at the code I have to guess that it's O(n). But something important to consider with this problem:

Still, this took runtime down to 56ms, which outperforms 98.9% of all submissions on leetcode. So there!
