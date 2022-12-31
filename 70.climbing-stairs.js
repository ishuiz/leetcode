/**
 * 70. 爬楼梯
 * https://leetcode.cn/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1 || n === 2) {
    return n
  }
  let a = 1
  let b = 2
  let result
  for (let i = 3; i <= n; i++) {
    result = a + b
    a = b
    b = result
  }
  return result
};

console.log(climbStairs(5))