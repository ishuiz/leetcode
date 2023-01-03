/**
 * 1. 两数之和
 * https://leetcode.cn/problems/two-sum/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const cache = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (cache[diff] !== undefined) {
      return [cache[diff], i]
    } else {
      cache[nums[i]] = i
    }
  }
};