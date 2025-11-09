/*
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

function searchRange(arr,target){
    let l = 0;
    let r = arr.length -1;
    let ans =[-1,-1];

    while(l < r){
        let mid = l + Math.floor((r - l) / 2)

        // find first position
        if(arr[mid] < target) l = mid + 1;
        else r = mid
    }
    if(arr[l] === target) ans[0] = l;


    l = 0;
    r = arr.length - 1;
    // find last position
    while(l < r){
        let mid = l + Math.ceil((r - l) / 2)
      
        if(arr[mid]  > target) r = mid - 1;
        else l = mid;
    }

    if(arr[l] === target) ans[1] = l;

    return ans;

}

let arr = [5,7,7,8,8,10], target = 8;
let arr2 = [] , target2 = 0
console.log(searchRange(arr, target));
console.log(searchRange(arr2, target2));
