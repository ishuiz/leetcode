/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let ans = ''
  for (let i=0; i<nums.length && num >= 0; i++) {
    while (num >= nums[i]) {
      ans += romans[i]
      num -= nums[i]
    }
  }
  return ans
};

const ret = intToRoman(1994)
console.log(ret)