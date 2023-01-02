/**
 * 101. 对称二叉树
 * https://leetcode.cn/problems/symmetric-tree/
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
var isSymmetric = function(root) {
  function isSame(l, r) {
    if (!l && !r) {
      return true
    }
    if (!l || !r) {
      return false
    }
    if (l.val !== r.val) {
      return false
    }
    return isSame(l.left, r.right) && isSame(l.right, r.left)
  }

  return isSame(root, root)
};