/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (!nums || nums.length < 3) {
    return
  }
  const len = nums.length
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]
  for (let i=0; i<len; i++) {
    let l = i + 1
    let r = len - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === target) {
        return sum
      } else {
        if (sum > target) {
          r -= 1
        } else {
          l += 1
        }
        if (Math.abs(sum - target) < Math.abs(res - target)) {
          res = sum
        }
      }
    } 
  }
  return res
};

const ret = threeSumClosest([0,2,1,-3], 1)
console.log(ret)