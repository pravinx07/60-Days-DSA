//  left rotate array by onr place

//  arr = [1,2,3,4,5] => [2,3,4,5,1] by one place


function rotateArr(arr){
    let n = arr.length
    let temp = arr[0]
    if(n === 0 ) return arr; 
    if(n === 1) return arr;
    for(let i = 1; i < n; i++){
        arr[i - 1] = arr[i]
    }
    arr[n-1] = temp
    return arr
}

let arr = [1,2,3,4,5]
let arr1 = [1]
let arr2 = []
console.log(rotateArr(arr));
console.log(rotateArr(arr1));
console.log(rotateArr(arr2));
// log
