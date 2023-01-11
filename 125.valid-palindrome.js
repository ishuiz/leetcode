/**
 * 125. 验证回文串
 * https://leetcode.cn/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (!isValidChar(s[i])) {
      i += 1
    } else if (!isValidChar(s[j])) {
      j -= 1
    } else if (!isEqual(s[i], s[j])) {
      return false
    } else {
      i += 1
      j -= 1
    }
  }
  return true
};
function isValidChar(char) {
  return /[a-z0-9]/i.test(char)
}
function isEqual(a, b) {
  if (typeof a !== typeof b) {
    return false
  }
  if (typeof a === 'string') {
    return a.toLowerCase() === b.toLowerCase()
  }
  return a === b
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))