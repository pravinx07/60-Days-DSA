/*
169. Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

function majority(arr){
    let n = arr.length
    for(let i = 0; i < n; i++){
        let cnt = 0
        for(j = 0; j < n; j++){
            if(arr[j] === arr[i]){
                cnt++
            }
        }
        if(cnt >= Math.floor(n/2)) return arr[i]
    }
    return -1
}


let arr = [2,2,1,1,1,2,2]
console.log(majority(arr));
