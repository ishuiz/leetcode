/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // if (x < 0) {
  //   return false
  // }
  // if (x === 0) {
  //   return true
  // }
  // const s = x+''
  // const len = s.length
  // for (let i=0; i<len / 2; i++) {
  //   if (s.charAt(i) !== s.charAt(len - i - 1)) {
  //     return false
  //   }
  // }
  // return true

  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let reversedNumber = 0
  while (x > reversedNumber) {
    reversedNumber = reversedNumber * 10 + x % 10
    x = (x / 10) | 0
  }
  console.log(x, reversedNumber / 10)
  return x === reversedNumber || x === ((reversedNumber / 10) | 0)
};

let ret = isPalindrome(12321)
console.log(ret)