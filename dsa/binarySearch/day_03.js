/*Given an array of integers nums sorted 
in non-decreasing order,
 find the starting and 
 ending position of a given target value.

If target is not found in the array,
 return [-1, -1].

 Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */

// function searchRange(arr,target){
//     let n = arr.length;
//     let first = -1;
//     let last = -1;
//     for(let i = 0; i < n; i++){
//         if(arr[i] === target){
//             if(first === -1) first = i
//             last = i
//         }
//     }
//     return new Array(first , last)
// }
// console.log(searchRange([5,7,7,8,8,10],8));
// console.log(searchRange([5,7,7,8,8,10],6));

// using binary search
function firstOccurence(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let first = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return first;
}

// console.log(firstOccurence([5, 7, 7, 8, 8, 10], 8));

function lastOccurence(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let last = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return last;
}

// console.log(lastOccurence([5, 7, 7, 8, 8, 10], 8));
function findFirstAndLast(arr,target){
    
let firstOccu = firstOccurence(arr,target)
if(firstOccu === -1) return [-1,-1];

let lastOccu = lastOccurence(arr,target)
return [firstOccu,lastOccu]

}

console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 6));


// number of accurance
function firstOccurence_2(arr, target) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let first = -1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        first = mid;
        high = mid - 1;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return first;
  }
  
  // console.log(firstOccurence([5, 7, 7, 8, 8, 10], 8));
  
  function lastOccurence_2(arr, target) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let last = -1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        last = mid;
        low = mid + 1;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return last;
  }
  
  // console.log(lastOccurence([5, 7, 7, 8, 8, 10], 8));
  function findFirstAndLast_2(arr,target){
      
  let firstOccu = firstOccurence(arr,target)
  if(firstOccu === -1) return 0;
  
  let lastOccu = lastOccurence(arr,target)
  return (lastOccu - firstOccu) + 1
  
  }
  
  console.log(findFirstAndLast_2([5, 7, 7, 8, 8, 10], 8));
  

/*
search in rotated sorted array
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

using linear search
 */

function searchNum(arr,target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return i
    }
    return -1;
}

console.log(searchNum([4,5,6,7,0,1,2],0));

// binary search 

var search = function(nums, target) {
    let n = nums.length;
   let low = 0;
   let high = n - 1;

   while(low <= high){
    let mid = Math.floor((low + high) / 2)

    if(nums[mid] === target) return mid;

    // left sorted

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
   return -1;

};