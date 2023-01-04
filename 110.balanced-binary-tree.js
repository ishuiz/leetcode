/**
 * 110. 平衡二叉树
 * https://leetcode.cn/problems/balanced-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 解法1:
// var isBalanced = function(root) {
//   if (!root) {
//     return true
//   }
//   const diff = maxDepth(root.left) - maxDepth(root.right)
//   if (diff >= -1 && diff <= 1) {
//     return isBalanced(root.left) && isBalanced(root.right)
//   }
//   return false
// };
// function maxDepth(node) {
//   if (!node) {
//     return 0
//   }
//   return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1
// }

var isBalanced = function(root) {
  return height(root) >= 0

  function height(node) {
    if (!node) {
      return 0
    }
    const leftHeight = height(node.left)
    const rightHeight = height(node.right)
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    }
    return Math.max(leftHeight, rightHeight) + 1
  }
}