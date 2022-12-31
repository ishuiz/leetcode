/**
 * 69. x 的平方根
 * https://leetcode.cn/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 1) {
    return 1
  }
  let min = 0
  let max = x
  let mid
  while (max - min > 1) {
    mid = Math.floor((min + max) / 2)
    if (x / mid < mid) {
      max = mid
    } else {
      min = mid
    }
  }
  return min
};
