/*
81. Search in Rotated Sorted Array II

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
 */

// using linear search
/*

function searchNumber(nums,target){
    for(let i = 0; i < nums.length; i++)
    if(target === nums[i]) return true
    return false;
    
}
console.log(searchNumber([2,5,6,0,0,1,2],3));
console.log(searchNumber([2,5,6,0,0,1,2],0));
*/

// using binary search

function findNumber(nums,target){
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    while(low <= high){
        let mid = Math.floor((low + high)/2)

        if(nums[mid] === target) return true;

        if(nums[low] === nums[mid]  && nums[mid] === nums[high]){
            low++;
            high--
            continue;
        }

        if(nums[low] <= nums[mid]){
            if(nums[low] <= target && target <= nums[mid]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }else{
            if(nums[mid] <= target && target <= nums[high]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
       }
       return false

    


}

console.log(findNumber([2,5,6,0,0,1,2],3));
console.log(findNumber([2,5,6,0,0,1,2],0));

