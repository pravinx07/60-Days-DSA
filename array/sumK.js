/*
write a program that give longest subarray of given sum k positive
arr = [1,2,4,1,1,1,4,2] k = 3
ans = 1,1,1 => 3
*/


function subArrSum(arr,num){
    let len = 0
    let n = arr.length
    for(let i = 0; i < n; i++){
        sum = 0
       for(let j = i; j < n; j++){
        
            sum += arr[j]
            if(sum === num) return Math.max(len,j-i+1)
        
       }
    }
    console.log(len);
    
}

let arr = [1,2,3,1,1,1,4,5]
let num = 3
console.log(subArrSum(arr,num));
