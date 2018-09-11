function spiralCopy(inputMatrix) {
  let height = inputMatrix.length
  let width = inputMatrix[0].length

  let top = 0
  let bottom = height - 1
  let left = 0
  let right = width - 1

  let result = []
  while (top <= bottom && left <= right) {
    for (let i = left; i < right; i++) {
      result.push(inputMatrix[top][i])
    }
    top++
    for (let j = top; j < bottom; j++) {
      result.push(inputMatrix[j][right])
    }
    right--

    if (top <= bottom) {
      for (let k = right; k > left; k--) {
        result.push(inputMatrix[bottom][k])
      }
      bottom--
    }

    if (left <= right) {
      for (let l = bottom; l > top; l--) {
        result.push(inputMatrix[l][left])
      }
      left++
    }
  }
  return result
}
