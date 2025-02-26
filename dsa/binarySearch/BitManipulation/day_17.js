/*
136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. 
Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1*/
/*
function singleNum(nums) {
  let xor = 0;

//   for (let i = 0; i < nums.length; i++) {
//     xor = xor ^ nums[i];
//   }
//   return xor;

 nums.map((item)=>{
    xor = xor ^ item
 })
 return xor
}
console.log(singleNum([2, 2, 1]));
console.log(singleNum([4,1,2, 2, 1]));
console.log(singleNum([1]));
*/
/*
78. Subsets
Given an integer array nums of unique elements, return all possible subsets (the power set).
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/

function powerSet(nums){
    // let n = arr.length
    // let subsets = 1 << n
    // let ans = []

    // for(i = 0; i < subsets; i++){
    //     let list = []
    //     for(let j = 0; j < n; j++){
    //         if(i & (1 << j)){
    //             list.push(arr[j])
    //         }
            
    //     } 
    //     ans.push(list)
       
    // }
    // return ans
    let arr = [[]];

    for (const num of nums) {
        const temp = [...arr];
        
        for (let i = 0; i < temp.length; i++) {
            arr.push([...temp[i], num]);
            // temp[i].push(num);
        }

        // console.log(arr);
        // arr = arr.concat(temp);
        // console.log(arr);

        // arr.push(...temp);
    }

    return arr;
}

console.log(powerSet([1,2,3]));
