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

function singleNum(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}
console.log(singleNum([2, 2, 1]));
console.log(singleNum([4,1,2, 2, 1]));
console.log(singleNum([1]));
