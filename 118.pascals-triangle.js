/**
 * 118. 杨辉三角
 * https://leetcode.cn/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = []
  for (let i = 0; i < numRows; i++) {
    result[i] = []
    for (let j = 0; j < i + 1; j++) {
      const prev = result[i - 1]
      const n = (j === 0 || j === i) ? 1 : prev[j - 1] + prev[j]
      result[i].push(n)
    }
  }
  return result
};
