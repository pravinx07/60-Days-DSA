/*
33. Search in Rotated Sorted Array
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 */


function search(arr,target){
  let l = 0;
  let r = arr.length - 1;
  while(l <= r){
    let mid = l + Math.floor((r - l ) / 2)

    if(target === arr[mid]) return mid;

    // left sorted array
 
    if(arr[l] <= arr[mid]){
        if(target >= arr[l] && target < arr[mid]){
            r = mid - 1;
        }else{
            l = mid + 1;
        }
        
    }else{
        if(target > arr[mid] && target <= arr[r]){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }
  }
  return -1

}

let nums = [4,5,6,7,0,1,2], target = 0;
let nums2 = [3,1] , target1 = 1
console.log(search(nums,target));
console.log(search(nums2,target1));