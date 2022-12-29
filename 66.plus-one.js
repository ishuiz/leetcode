/**
 * 66. 加一
 * https://leetcode.cn/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0 ; i--) {
    if (digits[i] !== 9) {
      digits[i] += 1
      return digits
    }
    digits[i] = 0
  }
  // 到此说明原数组全是9
  digits.unshift(1)
  return digits
};
