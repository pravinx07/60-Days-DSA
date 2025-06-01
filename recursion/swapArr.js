/*
reverse the arr using recursion
arr = [1,2,3,4,5] => [5,4,3,2,1]
*/

/*
function reverseArr(l,r,arr){
   if(arr.length === 0 || arr.length === 1) return 
  if(l >= r) return 

  [arr[l], arr[r]] = [arr[r],arr[l]]
  reverseArr (l+1,r-1,arr)
}

let arr = [1,2,3,4,5,6]
let arr2 = [1,2,3,4]
let n = arr2.length;
console.log(reverseArr(0,n-1,arr2));
console.log("Array after reverse: " , arr2);

*/


function reverseArr(l,arr){
    let n = arr.length
   if(arr.length === 0 || arr.length === 1) return 
  if(l >= n/2) return 
  

  [arr[l], arr[n-l-1]] = [arr[n-1-l],arr[l]]
  reverseArr (l+1,arr)
}

let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4]
let n = arr1.length;
reverseArr(0,arr1);
console.log("Array after reverse: " , arr1);