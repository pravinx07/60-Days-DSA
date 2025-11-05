/*
322. Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
Example 3:
Input: coins = [1], amount = 0
Output: 0
*/


// with recursion it give TLE so used DP  and Map also give TLE so used  simple object 
let coinChange = (coins,amount) => {
    let n = coins.length;
    let dp = {}

    let fn = (remAmount) => {
        if(remAmount === 0) return 0;
        if(remAmount < 0) return -1
        
        if(remAmount in dp){
            return dp[remAmount]
        }
        let minCoins = Infinity
        for(let i = 0; i < n; i++){
            let res = fn(remAmount - coins[i])
            if(res != -1){
                minCoins = Math.min(minCoins , 1 + res)
            }
        }
        dp[remAmount] = minCoins === Infinity ? -1 : minCoins;
        return dp[remAmount]
    }
   return fn(amount)
}

let coins = [1,2,5], amount = 100
console.log(coinChange(coins, amount));



// Tabulation approch

var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0;

    for(let rem = 1; rem <= amount; rem++){
       for(let j = 0; j < n; j++){
        let remainingAmount = rem - coins[j];

        if(remainingAmount >= 0){
            dp[rem] = Math.min(dp[rem], 1 + dp[remainingAmount])
        }
       }

    }
    return dp[amount] == Infinity ? -1 : dp[amount]
};


console.log(coinChange(coins,))