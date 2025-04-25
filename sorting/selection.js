// // Selection Sort

// // bubble sort

// let arr = [10,5,12,1,3]
// let n = arr.length;

// for(let i = 0; i< n - 1; i++){
//     let minIndex = i
//     for(let j = i+1; j < n; j++){
//         if(arr[minIndex] > arr[j]) minIndex = j
//     }
//     if(minIndex!=i){
//         let temp = arr[minIndex]
//         arr[minIndex] = arr[i]
//         arr[i] = temp
//     }
// }

// console.log(arr);

function swap(arr,x,y){
    [arr[x],arr[y]] = [arr[y],arr[x]]
}
function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i <= n - 2; i++){
        let min = i
        for(let j = i; j <= n - 1; j++){
            if(arr[j] < arr[min]) min = j 
    

        }
        // let temp = arr[i]
        // arr[i] = arr[min]
        // arr[min] = temp
        if(min != i){
            swap(arr,min,i)
        }
        
    }
    
}
const arr = [5,1,3,7]
console.log("Before sorting: "+ arr);

selectionSort(arr)
console.log("After sorting: "+arr);

