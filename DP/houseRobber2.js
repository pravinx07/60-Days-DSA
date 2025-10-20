/*213. House Robber II  => circuler

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3

*/

var rob = function(nums) {
   let n = nums.length;
   if(n === 1) return nums[0]

   let robHelper = (start, end) => {
    let p1 = 0, p2 = 0;
    for(let i = start; i <= end; i++){
        let temp = Math.max(p1, p2 + nums[i])
        p2 = p1;
        p1 = temp;
    }
    return p1
   }

   return Math.max(robHelper(0,n-2), robHelper(1,n-1))
};


let nums = [2,3,2]
console.log(rob(nums));
