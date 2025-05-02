//  Check the array is sorted or not 

function isSorted(arr){
    let n = arr.length
    for(let i = 1; i < n; i++){
        if(arr[i]>=arr[i-1]){
            
        }else{
           return false
        }
    }
    return true
}

let arr = [8,1,5,3,2]
let arr1 = [1,2,3,4,5]
let arr2 = []
let arr3 = [1,1,1,1]
console.log(isSorted(arr));
console.log(isSorted(arr2));
console.log(isSorted(arr3));

console.log("After sorting: " + arr);
