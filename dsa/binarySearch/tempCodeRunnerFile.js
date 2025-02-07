let n = arr.length;
    let low = 0;
    let high = n - 1
    let ans = Infinity
    let index = -1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[low] <= arr[high]){
            if(arr[low] < arr){
                index = low
                ans = arr[low]
            }
            break;
        }

        if(arr[low] <= arr[mid]){
            if(arr[low] < ans){
                index = low
                ans = arr[low]
            }
            low = mid + 1
        }else{
            
            if(arr[mid] < ans){
                index = mid;
                ans = arr[mid]
            }
            high = mid - 1;
        }
    }
    return index;
