/**
 * 26. 删除有序数组中的重复项
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) {
    return nums
  }
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i]
    }
  }
  return ++j
};
