/**
 * 67. 二进制求和
 * https://leetcode.cn/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const aLen = a.length
  const bLen = b.length

  const max = Math.max(aLen, bLen)
  let carry = 0
  let result = ''

  for (let i = 0; i < max; i++) {
    carry += (i < aLen ? +a.charAt(aLen - 1 - i) : 0)
    carry += (i < bLen ? +b.charAt(bLen - 1 -i) : 0)

    result += (carry % 2)
    carry = Math.floor(carry / 2)
  }
  if (carry > 0) {
    result += '1'
  }
  return result.split('').reverse().join('')
};