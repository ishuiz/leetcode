/**
 * 58. 最后一个单词的长度
 * https://leetcode.cn/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.trim().split(' ').pop().length
};
