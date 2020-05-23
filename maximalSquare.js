var list = [
  ['1', '0', '1', '0'],
  ['1', '0', '1', '1'],
  ['1', '0', '1', '1'],
  ['1', '1', '1', '1'],
]

var maximalSquare = function (matrix) {
  let maxSide = 0
  if (
    !Array.isArray(matrix) ||
    !matrix.length ||
    !Array.isArray(matrix[0]) ||
    !matrix[0].length
  ) {
    return maxSide
  }
  const rows = matrix.length
  const cols = matrix[0].length
  let dp = []
  for (let i = 0; i < rows; i++) {
    dp[i] = []
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = 1
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        maxSide = Math.max(dp[i][j], maxSide)
      } else {
        dp[i][j] = 0
      }
    }
  }
  console.log(dp)
  return maxSide * maxSide
}

console.log(maximalSquare(list))
