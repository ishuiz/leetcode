/**
 * 112. 路径总和
 * https://leetcode.cn/problems/path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false
  }
  if (root.left === null && root.right === null) {
    return root.val === targetSum
  }
  const target = targetSum - root.val
  return hasPathSum(root.left, target) || hasPathSum(root.right, target)
};
