// Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

const array = require("array/lib/array")

// Examples: 

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.


function moveZeros(arr){
    let n = arr.length;
    
    let count = 0

    for(let i = 0; i < n; i++){
        if(arr[i] !== 0){
            arr[count++] = arr[i]
        }
    }

    while(count < n){
        arr[count++] = 0
    }
   return arr
}

let arr = [1, 2, 0, 4, 3, 0, 5, 0];

console.log(moveZeros(arr))