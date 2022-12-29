/**
 * 35. 搜索插入位置
 * https://leetcode.cn/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  let mid
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2)
    if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      return mid
    }
  }
  return l
};
