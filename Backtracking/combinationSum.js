// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/
/*
Given an array of distinct integers candidates and
 a target integer target, return 
 a list of all unique combinations of candidates 
 where the chosen numbers sum to target. 
 You may return the combinations in any order.
 

 Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

*/

function combinationSum(arr, target){
    let res = [];
    function backtrack(remainingSum , path, start){
         // ✅ Base case: found a valid combination
        if(remainingSum == 0) res.push([...path])
        

        //  Base case: target exceeded
        if(remainingSum < 0) return;
      for(let i = start; i < arr.length; i++){
        path.push(arr[i]);
        backtrack(remainingSum - arr[i] , path, i);
        path.pop();
      }
    }
    backtrack(target , [] , 0)
    return res;
}

let arr = [2,3,6,7]
let target = 7;
let arr2 =  [2,3,5]
let target2 = 8

console.log(combinationSum(arr2, target2));
