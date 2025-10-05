/*
216. Combination Sum III
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. 
The list must not contain the same combination twice,
 and the combinations may be returned in any order.
Example 1:
input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.

Example 2:
Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
*/

var combinationSum3 = function (k, n) {
    let res = [];

    function backtrack(remianing, path, start) {
        if (path.length === k) {
            if (remianing == 0) {
                res.push([...path])

            }
            return;

        }

        for (let i = start; i <= 9; i++) {
            path.push(i)
            backtrack(remianing - i, path, i + 1)
            path.pop()
        }
    }
    backtrack(n, [], 1)
    return res;
};

let k = 3, n = 7
console.log(combinationSum3(k, n));