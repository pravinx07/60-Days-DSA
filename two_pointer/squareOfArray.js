/*
977. Squares of a Sorted Array

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 


*/

function squareofSortedArray(arr){
    let l = 0;
    let r = arr.length - 1;
    let ans = [];
    let k = r;

    while(l <= r){
        if(Math.abs(arr[l]) > Math.abs(arr[r])){

            ans[k] = arr[l] * arr[l]
            l = l + 1;
        }else{
            ans[k] = arr[r] * arr[r];
            r = r - 1;
        }
        k--;
    }

    return ans
}

let arr = [-7,-3,2,3,11]
console.log(squareofSortedArray(arr));