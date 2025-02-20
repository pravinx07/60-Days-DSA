/*26. Remove Duplicates from Sorted Array
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores). */
/*
function removeDuplicate(arr){
   let i = 0;
   for(j = 1; j < arr.length; j++){
    if(arr[j] !== arr[i]){
        arr[i + 1] = arr[j]
        i++
    }
   }
   return i + 1;
}
console.log(removeDuplicate([1,1,2,2]));
console.log(removeDuplicate([1,1,2,2,3,3,4]));
*/

// remove elements

function removeElements(arr,val){
    i = 0;
    for (let x of arr){
        // console.log(x);
        
        if (x !== val){
            arr[i] = x
            i++
        }
        
    }
    return i
}
console.log(removeElements([3,2,2,3],3));
console.log(removeElements([0,1,2,2,3,0,4,2],2));


var removeElement = function(nums, val) {
    let arr = [];
   for (let i = 0; i < nums.length; i++) {
     if (nums[i] !== val) {
       arr.push(nums[i]);
     }
   }
 
   nums.splice(0, nums.length, ...arr.sort());
 
   return arr.length;
 };
 console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2],2))