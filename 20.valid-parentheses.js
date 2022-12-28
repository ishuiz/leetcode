/** 20. 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const opposite = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] in opposite) {
      stack.push(opposite[s[i]])
    } else if (s[i] !== stack[stack.length - 1]) {
      return false
    } else {
      stack.pop()
    }
  }
  return !stack.length
};