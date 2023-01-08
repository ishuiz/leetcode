/**
 * 121. 买卖股票的最佳时机
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let result = 0
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] > prices[i]) {
//         result = Math.max(result, prices[j] - prices[i])
//       }
//     }
//   }
//   return result
// };

var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0
  }
  let min = prices[0]
  let result = 0
  for (let i = 1; i < prices.length; i++) {
    result = Math.max(result, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return result
};