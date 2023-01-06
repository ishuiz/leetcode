/**
 * 119. 杨辉三角 II
 * https://leetcode.cn/problems/pascals-triangle-ii/
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  const prev = getRow(rowIndex - 1)
  const result = []
  for (let i = 0; i <= rowIndex; i++) {
    if (i === 0 || i === rowIndex) {
      result.push(1)
    } else {
      result.push(prev[i - 1] + prev[i])
    }
  }
  return result
}

// var getRow = function (rowIndex) {
//   const row = new Array(rowIndex + 1).fill(0)
//   row[0] = 1
//   for (let i = 1; i <= rowIndex; ++i) {
//     for (let j = i; j > 0; --j) {
//       row[j] += row[j - 1]
//     }
//   }
//   return row
// }
