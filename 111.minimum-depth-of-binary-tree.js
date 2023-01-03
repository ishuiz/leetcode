/**
 * 111. 二叉树的最小深度
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0
  }
  if (root.left === null) {
    return minDepth(root.right) + 1
  } else if (root.right === null) {
    return minDepth(root.left) + 1
  } else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  }
};
