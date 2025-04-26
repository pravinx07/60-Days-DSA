// insertion sort
/*
let arr = [10,5,12,1,3]
let n = arr.length;

for(let i = 1; i < n; i++){
    let key = arr[i]
    let j = i - 1
    while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = key
}
console.log(arr);
*/

function insertionSort(arr){
    let n = arr.length
    for(i = 0; i <= n - 1; i++){
        j = i
        while(j > 0 && arr[j-1]>arr[j]){
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
            j--
        }
    }
}

let arr = [3,2,0,5,6]
insertionSort(arr)
console.log("After Sorting: "+ arr);

