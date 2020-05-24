/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return ''
  }
  const firstStr = strs[0]
  for (let i = 0; i<firstStr.length; i++) {
    for (let j=1; j<strs.length; j++) {
      if (i >= strs[j].length || firstStr[i] !== strs[j][i]) {
        return firstStr.slice(0, i)
      }
    }
  }
  return firstStr
};

const ret = longestCommonPrefix(["flower", "flow", "flight"])
console.log(ret)