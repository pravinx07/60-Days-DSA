/**
 merge sort => divide and conquer and merge
 */


function mergeSort(arr, low, mid , high){
    let temp = []
    let left = low;
    let right = mid+1

    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
           temp.push(arr[left])
           left++
        }else{
            temp.push(arr[right])
            right++
        }
    }
    while(left <= mid){
        temp.push(arr[left])
        left++
    }
    while(right <= high){
        temp.push(arr[right])
        right++
    }

    for(let i = low; i <= high; i++){
        arr[i] = temp[i-low]
    }
}

 function mS(arr, low , high){
    if(arr.length === 0 || arr.length == 1) return arr
    if(low === high) return
    let mid = Math.floor((low + high) / 2)

    mS(arr,low , mid)
    mS(arr, mid+1, high)
    mergeSort(arr, low , mid, high)


 }


 let arr = [5,2,90,21,5,1]
 let arr2 = [1,2,3,4,5,0]
 let arr3 = [1]
 let n = arr3.length;

 console.log(mS(arr3,0,n-1));
 console.log("Array after sorting : " ,arr3);
 
 