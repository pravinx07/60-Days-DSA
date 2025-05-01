//  find the second largest

function secondLargest(arr){
    let n = arr.length
    let largest = arr[0]
    let sLargest = -1

    if(n === 0) return -1
    for(let i = 0; i < n; i++){
        if(arr[i] > largest){
            sLargest = largest
            largest = arr[i]
        }
        else if(arr[i] < largest && arr[i] > sLargest){
            sLargest = arr[i]
        }
    }
    return [largest,sLargest]
}

let arr = [1,2,4,7,7,5]
let arr2 = []
let arr1 = [1,1,1,1]
let arr3 = [2]
console.log(secondLargest(arr1));
console.log(secondLargest(arr2));
console.log(secondLargest(arr3));
