/*
153. Find Minimum in Rotated Sorted Array

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
 

*/

function findMin(arr){
  let l = 0;
  let r = arr.length - 1

  while( l <= r){
    let mid = l + Math.floor((r - l) / 2)

    if(arr[l] <= arr[r]){
        return arr[l]
    }

    if(arr[mid] < arr[mid - 1])
    {
        return arr[mid]
    }else if(arr[l] > arr[mid]){
        r = mid - 1
    }else{
        l = mid + 1
    }

  }
}

let arr = [4,5,6,7,0,1,2]
let arr2 = [2,1]
console.log(findMin(arr));
console.log(findMin(arr2));