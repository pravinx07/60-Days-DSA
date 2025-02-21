// best time to buy and sell stoks
/*
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0. */

function maxProfit(prices) {
  //   let mini = prices[0]
  //   let maxProfits = 0
  //   let n = prices.length;

  //   for(let i = 0; i < n; i++){
  //      let cost = prices[i] - mini
  //      maxProfits = Math.max(maxProfits,cost)
  //     mini = Math.min(mini,prices[i])
  //   }
  //   return maxProfits
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice; //
    }
  }

  return maxProfit;
}
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
