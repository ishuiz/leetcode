/**
 * 108. 将有序数组转换为二叉搜索树
 * https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const n = nums.length - 1
  const mid = Math.floor(n / 2)
  const root = new TreeNode(nums[mid])
  if (mid > 0) {
    root.left = sortedArrayToBST(nums.slice(0, mid))
  }
  if (mid < n) {
    root.right = sortedArrayToBST(nums.slice(mid + 1))
  }
  return root
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
