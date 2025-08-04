//  convert min heap to max heap
// ex = [1, 3, 5, 7, 9, 11] => Max Heap: [11, 9, 5, 7, 3, 1]


function heapiFyMaxDown(arr,n, i){
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < n && arr[left] > arr[largest]) largest = left;
    if(right < n && arr[right] > arr[largest]) largest = right;

    if(largest != i){
    [arr[i] , arr[largest]] = [arr[largest], arr[i]]
    heapiFyMaxDown(arr, n, largest)
    }

}

function convertMinTOMaxHeap(arr){
    let n = arr.length;

    for(let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapiFyMaxDown(arr, n, i)
    }
    return arr
}


let arr =  [1, 3, 5, 7, 9, 11]

console.log("Min to Max Heap => ",convertMinTOMaxHeap(arr));
