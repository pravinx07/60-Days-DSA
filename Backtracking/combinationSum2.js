/*
40. Combination Sum II
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 */

var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a,b) => a - b)
    function backtrack(start, path, remaining) {
        // ✅ Base case: found a valid combination
        if (remaining === 0) {
            result.push([...path]); // make a copy
            return;
        }

        // ❌ Base case: target exceeded
        if (remaining < 0) return;

        // Explore candidates from current index onwards
        for (let i = start; i < candidates.length && candidates[i] <= remaining; i++) {
        if (i > start && candidates[i - 1] == candidates[i]) continue;

            path.push(candidates[i]); // choose
            backtrack(i + 1, path, remaining - candidates[i]); 
            path.pop(); // undo (backtrack)
        }
    }

    backtrack(0, [], target);
    return result;
    
};

let arr = [10,1,2,7,6,1,5]
let target = 8;
console.log(combinationSum2(arr,target));
