/*Single Element in a sorted Array
Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 */
/* using linear search
function singleElement(arr){
    let n = arr.length;

    if(n === 1) return arr[0]

    for(let i = 0; i < n; i++){
        if(i === 0){
            if(arr[i] !== arr[i + 1]) return arr[i]
        }else if(i === n - 1){
            if(arr[i] !== arr[i - 1]) return arr[i]
        }else{
            if(arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1] ) return arr[i]
        }
    }
}

console.log(singleElement([3,3,7,7,10,11,11]));
console.log(singleElement([1,1,2,3,3,4,4,8,8]));

*/

// using binary search
/*
var singleNonDuplicate = function(nums) {
    let n = nums.length;
    if(n === 1) return nums[0]
    if(nums[0] !== nums[1]) return nums[0]
    if(nums[n-1] !== nums[n-2]) return nums[n-1]

    let low = 0;
    let high = n - 2
    while(low <= high) {
        let mid = Math.floor((low + high) / 2)

        if(nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) return nums[mid]

        else if((mid % 2 == 1 && nums[mid] === nums[mid - 1]) || (mid % 2 == 0 && nums[mid] === nums[mid + 1])){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
};

console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
*/

// fide peak element
/*
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

 nums[i-1] < nums[i] > nums[i + 1]
 */

 // using linear search
 /*
var findPeakElement = function(nums) {
    let n = nums.length;
    for(let i = 0; i < n; i++){
        if((i === 0 || nums[i - 1] < nums[i]) && ((i == n - 1) || nums[i] > nums[i + 1])) return i
    }
};

console.log(findPeakElement([1,2,1,3,5,6,4,7]));
console.log(findPeakElement([1,2,3,1]));
*/

// using binary search
/*
var findPeakElement = function(nums) {
    let n = nums.length;
    if(n === 1) return 0;
    if(nums[0] > nums[1]) return 0;
    if(nums[n - 1] > nums[n - 2]) return n-1;

    let low = 1;
    let high = n - 2;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid + 1]) return mid;
        else if(nums[mid] > nums[mid - 1]) low = mid + 1;
        else high = mid - 1;
    }
};


console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2,3,1]));
*/

var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length -1;
    while(left<right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]>nums[mid+1]){
            right = mid 
        } else{
            left = mid+1
        }
    }
    return left
    
};

console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2,3,1]));