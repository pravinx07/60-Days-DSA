let arr = [4,10,3,5,1]

function heapSort(arr){
    let n = arr.length;

   // maxHeap 
   for(let i = n - 1; i>= 0; i--){
    heapiFyDown(arr,i,n)

   }

   // sort the arr

   for(let i = n -1; i >= 0; i--){
     [arr[0], arr[i]] = [arr[i], arr[0]]
     heapiFyDown(arr,0,i)
   }

   return arr;
}


function heapiFyDown(arr,i,n){

    let largest = i;
    let left = 2 * i + 1
    let right = 2 * i + 2

    if(left < n && arr[left] > arr[largest]){
        largest = left
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest != i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapiFyDown(arr,largest,n)
    }
}

const sortedArr = heapSort(arr);
console.log(sortedArr);
