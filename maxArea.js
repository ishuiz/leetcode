/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0
  let r = height.length - 1
  let max = 0
  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l)
    max = Math.max(area, max)
    if (height[l] < height[r]) {
      l += 1
    } else {
      r -= 1
    }
  }
  return max
};

const ret = maxArea([1, 4, 8,6])

console.log(ret)