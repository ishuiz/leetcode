/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let low = 0
  let high = s.length - 1
  while (low < high) {
    if (s.charAt(low) === s.charAt(high)) {
      low += 1
      high -= 1
    } else {
      let flag1 = true
      let flag2 = true
      for (let i=low + 1, j=high; i<j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) {
          flag1 = false
          break
        }
      }
      for (let i=low, j=high - 1; i<j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) {
          flag2 = false
          break
        }
      }
      return flag1 || flag2
    }
  }
  return true
};

const ret = validPalindrome('acccv')
console.log(ret)

// aba
// abbab