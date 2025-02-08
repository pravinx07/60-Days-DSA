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

