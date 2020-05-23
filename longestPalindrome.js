var longestPalindrome = function(s) {
  if (!s) {
    return ''
  }

  let pd = ''
  const len = s.length
  for (let i = 0; i < len; i++) {
    let temp = s.slice(i)
    if (isPalindrome(temp) && temp.length > pd.length) {
      return temp
    }
    while(temp) {
      if (isPalindrome(temp) && temp.length > pd.length) {
        pd = temp
        break
      }
      temp = temp.slice(0, -1)
    }
  }
  return pd
};

function isPalindrome (str) {
  const len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('bab'))
console.log(longestPalindrome('babad'))