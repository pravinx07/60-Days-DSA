// Question 1:
// Find if 7 exists in [1, 3, 5, 7, 9, 11, 13].
// Write what happens in each step (low, high, mid, arr[mid]).

function binarySearch(arr,target){
 let low = 0;
 let high = arr.length - 1;

 while(low < high){
    let mid = Math.floor((low + high) / 2)
    // console.log(mid);
    

    if(arr[mid] === target) {
        return mid
    }else if(arr[mid] < target){
        high = mid - 1
    }else{
        low = mid + 1;
    }
 }
 return -1;
}

let arr = [1,3,5,7,9,11,13,15], target = 7;
let arr2 = [1,3,5,7,9,11,13] , target2 = 4 

console.log(binarySearch(arr,target));
console.log(binarySearch(arr2,target2));
