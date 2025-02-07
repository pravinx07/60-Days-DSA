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
/*
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

*/

/*153. Find Minimum in Rotated Sorted Array
Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
 */

// using linear search
/*
function findMinimum(nums){
    let ans = Math.min()
    // console.log(ans);
    for(let  i = 0; i < nums.length; i++){
        if(nums[i] < ans)  {
            ans = nums[i];
        }
    }
    return ans;

    
}
console.log(findMinimum([4,5,6,7,0,1,2]));
*/

// using binary search
/*
var findMin = function(nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    let ans = Infinity

    while(low <= high){
        if (nums[low] <= nums[high]) {
            ans = Math.min(ans, nums[low]);
            break;
        }

        let mid = Math.floor((low + high) / 2);
        ans = Math.min(ans, nums[mid]);
        if(nums[low] <= nums[mid]){
           low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return ans;
};
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([3,4,5,1,2]));
*/


// Find Kth Rotation

function findNumberOfRotation(arr){
    let n = arr.length;
    let low = 0;
    let high = n - 1
    let ans = Infinity
    let index = -1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[low] <= arr[high]){
            if(arr[low] < ans){
                index = low
                ans = arr[low]
            }
            break;
        }

        if(arr[low] <= arr[mid]){
            if(arr[low] < ans){
                index = low
                ans = arr[low]
            }
            low = mid + 1
        }else{
            
            if(arr[mid] < ans){
                index = mid;
                ans = arr[mid]
            }
            high = mid - 1;
        }
    }
    return index;

    
}
console.log(findNumberOfRotation([5,6, 1, 2, 3, 4]));
