/*
540. Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
*/

function findSingle(arr){
    let l = 0;
    let r = arr.length - 1;

    while( l <= r){
        let m = l + Math.floor((r - l ) / 2)
        
        // for count left odd elements  and first occuranc eof middle
        if(arr[m] == arr[m-1]){
            let leftCount = m - 1 -l;
            if(leftCount % 2 == 1){
                r = m - 2
            }else{
                l = m + 1
            }
        }
        // for second occuranc of middle
        else if(arr[m] === arr[m+1]){
            let leftCount = m - l;
            if(leftCount % 2 == 1){
                r = m - 1
            }else{
                l = m + 2
            }
        }else{
            return arr[m]
        }
    }

}

let arr = [1,1,2,3,3,4,4,8,8]
let arr2 = [3,3,7,7,10,11,11]
console.log(findSingle(arr));
console.log(findSingle(arr2));
