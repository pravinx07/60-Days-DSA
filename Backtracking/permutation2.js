/*
47. Permutations II
Given a collection of numbers, nums, that might contain duplicates,
return all possible unique permutations in any order.
Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

var permuteUnique = function (nums) {


    const results = [];
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    const used = new Array(nums.length).fill(false);

    function backtrack(path) {
        if (path.length === nums.length) {
            results.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            // Skip used elements
            if (used[i]) continue;
            // Skip duplicates: if current is same as previous and previous not used
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            used[i] = true;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return results;

};

let nums = [1,2,3]
console.log(permuteUnique(nums));
