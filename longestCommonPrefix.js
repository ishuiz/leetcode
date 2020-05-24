/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return ''
  }
  const firstStr = strs[0]
  let ans = ''
  let shouldStop = false
  for (let i = 0; i<firstStr.length; i++) {
    for (let j=1; j<strs.length; j++) {
      if (i >= strs[j].length || firstStr[i] !== strs[j][i]) {
        shouldStop = true
        break
      }
    }
    if (shouldStop) {
      break
    } else {
      ans += firstStr[i]
    }
  }
  return ans
};

const ret = longestCommonPrefix(["flower"])
console.log(ret)