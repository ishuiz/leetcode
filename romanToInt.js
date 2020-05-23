/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let ans = 0
  const len = s.length
  for (let i=0; i<len;) {
    if (i + 1 < len && romanMap[s.slice(i, i+2)]) {
      ans += romanMap[s.slice(i, i+2)]
      i += 2
    } else {
      ans += romanMap[s[i]]
      i += 1
    }
  }
  return ans
};

const ret = romanToInt('MCMXCIV')
console.log(ret)