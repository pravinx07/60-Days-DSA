// bubble sort
/*
let arr = [10,5,12,1,3]
let n = arr.length;

for(let i = 0; i< n - 1; i++){
    for(let j = 0; j < n - 1; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

console.log(arr);
*/

function bubbleSort(arr){
    let n = arr.length
    for(let i = n - 1; i >= 1; i--){
        let didSwap = 0
        for(let j = 0; j <= i; j++)
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                didSwap = 1
            }
            
            if(didSwap === 0){
                break
            }
            
            console.log("Loop Runs");
            
        }
    }

const arr = [12,24,46,20,9,52]
const arr2 = [1,2,4,5,6]
bubbleSort(arr2)
console.log("After Sorting: "+ arr2);
bubbleSort(arr)
console.log("After Sorting: "+ arr);

