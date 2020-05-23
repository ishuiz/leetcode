/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0]
  let prevMax = nums[0]
  let prevMin = nums[0]
  const len = nums.length
  for (let i=1; i<len; i++) {
    if (nums[i] < 0) {
      let temp = prevMax
      prevMax = prevMin
      prevMin = temp
    }
    prevMax = Math.max(prevMax * nums[i], nums[i])
    prevMin = Math.min(prevMin * nums[i], nums[i])

    max = Math.max(prevMax, max)
  }
  return max
};

const ret = maxProduct([-2, -3, 0, 4])
console.log(ret)