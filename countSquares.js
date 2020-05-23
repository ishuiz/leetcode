var list = [
    [1,0,1],
    [1,1,0],
    [1,1,0]
  ]

var countSquares = function (matrix) {
  let max = 0
  if (
    !Array.isArray(matrix) ||
    !matrix.length ||
    !Array.isArray(matrix[0]) ||
    !matrix[0].length
  ) {
    return max
  }
  let rows = matrix.length
  let cols = matrix[0].length
  let dp = []
  for (let i = 0; i < rows; i++) {
    dp[i] = []
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = matrix[i][j]
      } else if (matrix[i][j] === 0) {
        dp[i][j] = 0
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
      max += dp[i][j]
    }
  }
  return max
}

console.log(countSquares(list))