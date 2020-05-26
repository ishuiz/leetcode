/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length
  if (!nums || len < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  const res = []
  for (let i=0; i<len; i++) {
    if (nums[i] > 0) {
      return res
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1
    let r = len - 1
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) {
          l += 1
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r -= 1
        }
        l += 1
        r -= 1
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r -= 1
      } else {
        l += 1
      }
    }
  }
  return res
};

const ret = threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])
console.log(ret)