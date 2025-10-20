/*198. House Robber
Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.


*/

var rob = function (nums) {
  let n = nums.length;
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
};

let nums = [1,2,3,1]
console.log(rob(nums));


// space optimization
var rob = function(nums) {
    let prev1 = 0, prev2 = 0;

    for(let num of nums){
        let temp = Math.max(prev1, prev2 + num)
        prev2 = prev1;
        prev1 = temp;
    }

    return prev1;
};

console.log(rob(nums));
