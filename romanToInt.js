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
  for (let i=0; i<s.length; i++) {
    let key = s[i]
    const next = s[i + 1]
    if (
      (key === 'C' && (next === 'M' || next === 'D')) ||
      (key === 'X' && (next === 'C' || next === 'L')) ||
      (key === 'I' && (next === 'X' || next === 'V'))
    ) {
      key += next
      ans += romanMap[key]
      i += 1
    } else {
      ans += romanMap[key]
    }
  }
  return ans
};

const ret = romanToInt('MCMXCIV')
console.log(ret)