// 46. Permutations
/*
Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:
Input: nums = [1]
Output: [[1]]
*/

function permutations(nums){
 let n = nums.length;
 let res = [];

 function backtrack(path){
    if(path.length == n){
        res.push([...path])
        return
    }
   for(let i = 0; i < n; i++){
      if(!path.includes(nums[i])){
        path.push(nums[i])
        backtrack(path)
        path.pop();
      }
   }
 }

 backtrack([])
 return res
}

let nums = [1,2,3] ;
console.log(permutations(nums));
