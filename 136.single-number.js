/**
 * 136. 只出现一次的数字
 * https://leetcode.cn/problems/single-number/comments/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
};

/**
 * 使用异或运算
 * 
 * 交换律：a^b^c === a^c^b
 * 任何数与 0 异或为任何数: 0^n === n
 * 相同的数异或为 0: n^n === 0
 */

console.log(singleNumber([4,1,2,1,2]))