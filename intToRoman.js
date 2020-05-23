/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const numMap = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  let ans = ''
  if (numMap[num]) {
    ans = numMap[num]
  } else if (num > 1000) {
    const n = num / 1000 | 0
    ans = numMap[1000].repeat(n) + intToRoman(num - n * 1000)
  } else if (num > 900 && num < 1000) {
    ans = numMap[900] + intToRoman(num - 900)
  } else if (num > 500 && num < 900) {
    ans = numMap[500] + intToRoman(num - 500)
  } else if (num > 400 && num < 500) {
    ans = numMap[400] + intToRoman(num - 400)
  } else if (num > 100 && num < 400) {
    const n = num / 100 | 0
    ans = numMap[100].repeat(n) + intToRoman(num - n * 100)
  } else if (num > 90 && num < 100) {
    ans = numMap[90] + intToRoman(num - 90)
  } else if (num > 50 && num < 90) {
    ans = numMap[50] + intToRoman(num - 50)
  } else if (num > 40 && num < 50) {
    ans = numMap[40] + intToRoman(num - 40)
  } else if (num > 10 && num < 40) {
    const n = num / 10 | 0
    ans = numMap[10].repeat(n) + intToRoman(num - n * 10)
  } else if (num > 5 && num < 9) {
    ans = numMap[5] + intToRoman(num - 5)
  } else if (num > 0) {
    ans = 'I'.repeat(num)
  }
  return ans
};

const ret = intToRoman(1994)
console.log(ret)